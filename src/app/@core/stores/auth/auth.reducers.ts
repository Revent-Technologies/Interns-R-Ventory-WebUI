import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../../interfaces/auth.interface';
import { state } from '@angular/animations';

export interface State {
  // [x: string]: any;
  permitted: boolean;
  loginMessage: string;
  forgotPasswordSuccess: boolean;
  forgotPasswordFailure: string;
  username: string | null;
}

export const initialState: State = {
  permitted: false,
  loginMessage: '',
  forgotPasswordSuccess: false,
  forgotPasswordFailure: '',
  username: '',
};

const authReducerInternal = createReducer(
  initialState,
  on(AuthActions.LoginSuccess, (state, action) => {
    localStorage.setItem(
      'userData',
      JSON.stringify({ username: action.username })
    );

    return {
      ...state,
      permitted: true,
      loginMessage: '',
      username: action.username,
    };
  }),

  on(AuthActions.LoginFailed, (state, action) => {
    return {
      ...state,
      permitted: false,
      loginMessage: action.payload,
    };
  }),

  on(AuthActions.logOut, (state) => {
    localStorage.removeItem('userData');
    return {
      ...state,
      permitted: false,
    };
  }),

  on(AuthActions.forgotPasswordSuccess, (state) => {
    return {
      ...state,
      forgotPasswordSuccess: true,
      forgotPasswordFailure: '',
    };
  }),

  on(AuthActions.forgotPasswordFailure, (state, action) => {
    return {
      ...state,
      forgotPasswordSuccess: false,
      forgotPasswordFailure: action.errorMessage,
    };
  })
);

export function authReducer(state: State | undefined, action: Action) {
  return authReducerInternal(state, action);
}
