import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  permitted: boolean;
  loginMessage: string;
}

export const initialState: State = {
  permitted: false,
  loginMessage: '',
};

const authReducerInternal = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state) => {
    return {
      ...state,
      permitted: true,
      loginMessage: '',
    };
  }),
  on(AuthActions.loginFailed, (state, action) => {
    return {
      ...state,
      permitted: false,
      loginMessage: action.payload,
    };
  })
);

export function authReducer(state: State | undefined, action: Action) {
  return authReducerInternal(state, action);
}
