import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/@core/stores/auth/auth.actions';
import { Subscription, take } from 'rxjs';
import * as authSelectors from 'src/app/@core/stores/auth/auth.selectors';
import * as fromApp from 'src/app/@core/stores/app/app.reducer';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  emailForm!: FormGroup;
  subscription = new Subscription();
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>,
    private router: Router
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
  }

  onLogin() {
    if (this.emailForm.valid) {
      console.log('Valid Form');
      const email = this.emailForm.get('email')?.value;

      this.store.dispatch(AuthActions.forgotPassword({ payload: { email } }));
    }

    this.subscription.add(
      this.store
        .select(authSelectors.getForgotPasswordSuccess)
        .subscribe((data) => {
          if (data) {
            this.router.navigate(['../login']);
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
