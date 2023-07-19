import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/@core/interfaces/auth.interface';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.buildLoginForm();

    // subscribe to login Error Message
    this.subscription.add(
      this.store.select(authSelectors.getAuthMessage).subscribe((message) => {
        this.loginError = message;
      })
    );
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
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
        if (data === true) {
          console.log('logging in...');

          this.router.navigate(['app']);
        } else {
          console.log('cant login');
        }
      })
    );
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
