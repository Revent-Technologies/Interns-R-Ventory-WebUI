import { NgModule } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { defaultIfEmpty, exhaustMap, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@NgModule()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  loginCheck$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginStart),
      exhaustMap((action) => {
        return this.http
          .get<User[]>(`${environment.user}?username=${action.username}`)
          .pipe(
            map((roughData) => {
              const cleanData = roughData[0];
              if (cleanData) {
                if (cleanData.password === action.password) {
                  this.authService.startActivityTracking();

                  return AuthActions.loginSuccess({
                    username: action.username,
                  });
                } else {
                  return AuthActions.loginFailed({
                    payload: 'Password is incorrect',
                  });
                }
              } else {
                return AuthActions.loginFailed({
                  payload: 'Username does not exist',
                });
              }
            })
          );
      })
    );
  });

  forgotPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.forgotPassword),
      exhaustMap((action) => {
        return this.http
          .get<User[]>(`${environment.user}?username=${action.payload.email}`)
          .pipe(
            map((user) => {
              if (user.length > 0) {
                return AuthActions.forgotPasswordSuccess();
              } else {
                // console.log('email does not exist');
                return AuthActions.forgotPasswordFailure({
                  errorMessage: 'Email not registered',
                });
              }
            })
          );
      })
    );
  });

  logoutStart = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logoutStart),
      map(() => {
        localStorage.removeItem('userData');
        this.authService.stopTracking();

        this.router.navigate(['auth']);
        return AuthActions.logOut();
      })
    );
  });
}
