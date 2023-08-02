import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Notification } from 'src/app/@core/interfaces';
import { User } from 'src/app/@core/interfaces/auth.interface';
import { NotificationService } from 'src/app/@core/services/notification.service';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';
import * as AuthActions from 'src/app/@core/stores/auth/auth.actions';
import * as authSelectors from 'src/app/@core/stores/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  loginForm!: FormGroup;
  // loginUser!: User | undefined;
  loginError = '';
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>,

    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.buildLoginForm();
    
    const username = localStorage.getItem('usernmae');
    const password = localStorage.getItem('password');

    if (username && password) {
      this.store.dispatch(AuthActions.loginStart({
        username:username,
        password:password
      }));
    }
    // subscribe to login Error Message
    this.subscription.add(
      this.store.select(authSelectors.getAuthMessage).subscribe((message) => {
        this.loginError = message;

        if (this.loginError.includes('Username')) {
          //   this.loginForm.get("username")?.valid = true;
          this.loginForm.controls['username'].setErrors({
            usernameError: true,
          });
        } else if (this.loginError.includes('Password')) {
          this.loginForm.controls['password'].setErrors({
            passwordError: true,
          });
        } else {
          this.loginForm.controls['username'].setErrors(null);
          this.loginForm.controls['password'].setErrors(null);
        }
      })
    );
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      username: [
        null,
        [
          Validators.required,
          Validators.email,
          this.customValidator.bind(this),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          this.customValidator.bind(this),
        ],
      ],
    });
  }

  onSubmitForm() {
    if (this.loginForm.valid) {
      // console.log('Valid form submitted');
      const valueSubmitted: User = this.loginForm.value;

      // Authenticate
      this.store.dispatch(
        AuthActions.loginStart({
          username: valueSubmitted.username,
          password: valueSubmitted.password,
        })
      );
    }

    this.subscription.add(
      this.store.select(authSelectors.getAuthPermission).subscribe((data) => {
        if (data === true) {
          this.router.navigate(['app']);

          // Display snackbar
          const notificationData: Notification = {
            state: 'success',
            title: 'Login Success',
            message: `Welcome ${this.loginForm.controls['username'].value}!`,
          };
          this.notificationService.openSnackBar(
            notificationData,
            'zns-notification-success'
          );

          // Navigate to dashboard
          this.loginForm.reset();
        } else {
          // console.log('cant login');
        }
      })
    );
  }

  customValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.loginError.includes('username')) {
      return { usernameError: true };
    } else if (this.loginError.includes('password')) {
      return { passwordError: true };
    } else {
      return null;
    }
  }

  showDescriptionErrors(control: string) {
    const descriptionForm = this.loginForm.get(control);
    if (
      descriptionForm?.dirty ||
      (descriptionForm?.touched && descriptionForm.invalid)
    ) {
      if (descriptionForm.errors && descriptionForm.errors['required']) {
        return ` ${control} is required`;
      } else if (descriptionForm.errors && descriptionForm.errors['email']) {
        return 'Not a Valid Email';
      }
    }
    return '';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
