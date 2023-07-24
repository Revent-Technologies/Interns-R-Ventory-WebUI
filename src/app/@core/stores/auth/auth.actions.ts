import { createAction, props } from '@ngrx/store';

export const loginStart = createAction(
  '[Auth] Login start',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction('[Auth] Login Success');
export const loginFailed = createAction(
  '[Auth] Login failed',
  props<{ payload: string }>()
);

export const forgotPassword = createAction(
  '[Auth] Forgot Password',
  props<{
    payload: {
      email: string;
    };
  }>()
);

export const forgotPasswordSuccess = createAction(
  '[Auth] Forgot Password Success'
);

export const forgotPasswordFailure = createAction(
  '[Auth] Forgot Password Failure',
  props<{
    errorMessage: string;
  }>()
);
