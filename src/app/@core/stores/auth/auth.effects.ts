import { NgModule } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import {
  defaultIfEmpty,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@NgModule()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}

  loginCheck$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LoginStart),
      exhaustMap((action) => {
        return this.http
          .get<User[]>(`${environment.user}?username=${action.username}`)
          .pipe(
            map((roughData) => {
              const cleanData = roughData[0];
              if (cleanData) {
                if (cleanData.password === action.password) {
                  return AuthActions.LoginSuccess({
                    username: action.username,
                  });
                } else {
                  return AuthActions.LoginFailed({
                    payload: 'Password is incorrect',
                  });
                }
              } else {
                return AuthActions.LoginFailed({
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
      ofType(AuthActions.ForgotPassword),
      exhaustMap((action) => {
        return this.http
          .get<User[]>(`${environment.user}?username=${action.payload.email}`)
          .pipe(
            map((user) => {
              if (user.length > 0) {
                return AuthActions.ForgotPasswordSuccess();
              } else {
                // console.log('email does not exist');
                return AuthActions.ForgotPasswordFailure({
                  errorMessage: 'Email not registered',
                });
              }
            })
          );
      })
    );
  });
}
