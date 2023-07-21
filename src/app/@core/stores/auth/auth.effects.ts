import { NgModule } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { exhaustMap, map, mergeMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../../interfaces/auth.interface';

@NgModule()
export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

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
}
