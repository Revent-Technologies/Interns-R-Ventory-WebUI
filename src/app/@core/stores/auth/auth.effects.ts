import { NgModule } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { defaultIfEmpty, exhaustMap, map, mergeMap, tap } from 'rxjs';
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
      ofType(AuthActions.loginStart),
      exhaustMap((action) => {
        return this.http
          .get<User[]>(`${environment.user}?username=${action.username}`)
          .pipe(
            map((roughData) => {
              const cleanData = roughData[0];
              if (cleanData) {
                console.log('username exist');

                if (cleanData.password === action.password) {
                  return AuthActions.loginSuccess();
                  // return AuthActions.loginSuccess({ user: cleanData });
                } else {
                  console.log('password incorrect');

                  return AuthActions.loginFailed({
                    payload: 'Password is incorrect',
                  });
                }
              } else {
                console.log('username incorrect');

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
                console.log('email does not exist');
                return AuthActions.forgotPasswordFailure({
                  errorMessage: 'Email not registered',
                });
              }
            })
          );
      })
    );
  });
}
