import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
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
import { User } from 'src/app/@core/interfaces/auth.interface';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';
import * as AuthActions from 'src/app/@core/stores/auth/auth.actions';
import * as authSelectors from 'src/app/@core/stores/auth/auth.selectors';
import { Notification } from 'src/app/@core/interfaces';
import { NotificationComponent } from 'src/app/@core/shared/notification/notification.component';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  loginForm!: FormGroup;

  loginError = '';
  showNotification = false;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.buildLoginForm();

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
      console.log('Valid form submitted');
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
        if (data) {
          console.log('logging in...');

          const notificationData: Notification = {
            state: 'success',
            message: 'Welcome to R-Ventory!',
          };
          this.openNotification(notificationData);
          this.showNotification = true;

          this.router.navigate(['app']);
          this.loginForm.reset();
        } else {
          const notificationData: Notification = {
            state: 'warning',
            message: 'Invalid Email!',
          };
          this.openNotification(notificationData);
          this.showNotification = true;

          console.log('cant login');
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

  openNotification(data: Notification) {
    this.snackBar.openFromComponent(NotificationComponent, {
      data,
      duration: 5000,
      verticalPosition: this.verticalPosition,
      panelClass:
        data.state === 'success'
          ? 'zns-notification-success'
          : 'zns-notification-error',
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
