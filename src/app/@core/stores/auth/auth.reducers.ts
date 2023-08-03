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
  on(AuthActions.loginSuccess, (state, action) => {
    // if (!localStorage.getItem('userData')) {
    //   localStorage.setItem(
    //     'userData',
    //     JSON.stringify({
    //       username: action.username,
    //       expiryDate: new Date().getTime() + 10000,
    //     })
    //   );
    // }

    return {
      ...state,
      permitted: true,
      loginMessage: '',
      username: action.username,
    };
  }),

  on(AuthActions.loginFailed, (state, action) => {
    return {
      ...state,
      permitted: false,
      loginMessage: action.payload,
    };
  }),

  on(AuthActions.logOut, (state) => {
    // localStorage.removeItem('userData');
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
///
// on(AuthActions.logOut, (state) => ({
//     ...state,
//     permitted: false
//   })