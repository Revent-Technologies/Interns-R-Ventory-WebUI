import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/@core/stores/auth/auth.actions';

import { Subscription, take } from 'rxjs';
import * as authSelectors from 'src/app/@core/stores/auth/auth.selectors';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Notification } from 'src/app/@core/interfaces';
import { NotificationComponent } from 'src/app/@core/shared/notification/notification.component';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  emailForm!: FormGroup;
  subscription = new Subscription();
  errorMessage = '';
  showNotification = false;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.buildForm();
    this.subscription.add(
      this.store
        .select(authSelectors.getForgotPasswordFailure)
        .subscribe((message) => {
          this.errorMessage = message;
        })
    );
  }

  buildForm() {
    this.emailForm = this.fb.group({
      email: [null, [Validators.required]],
    });

    this.emailForm.get('email')?.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  onLogin() {
    if (this.emailForm.valid) {
      // console.log('Valid Form');
      const email = this.emailForm.get('email')?.value;

      this.store.dispatch(AuthActions.forgotPassword({ payload: { email } }));
    }

    this.subscription.add(
      this.store
        .select(authSelectors.getForgotPasswordSuccess)
        .subscribe((data) => {
          if (data) {
            const notificationData: Notification = {
              state: 'success',
              message: 'Successfully Logged in!',
            };
            this.openNotification(notificationData);
            this.showNotification = true;
            this.router.navigate(['../login']);
          }
        })
    );

    this.subscription.add(
      this.store
        .select(authSelectors.getForgotPasswordFailure)
        .subscribe((errorMessage) => {
          if (errorMessage) {
            const notificationData: Notification = {
              state: 'warning',
              message: 'Invalid Email!',
            };
            this.openNotification(notificationData);
            this.showNotification = true;
          }
        })
    );
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
