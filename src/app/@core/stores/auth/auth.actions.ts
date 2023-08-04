import { createAction, props } from '@ngrx/store';
import { Notification } from '../../interfaces';
import { User } from '../../interfaces/auth.interface';

export const LoginStart = createAction(
  '[Auth] Login start',
  props<{ username: string; password: string }>()
);

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ username: string }>()
);

export const LoginFailed = createAction(
  '[Auth] Login failed',
  props<{ payload: string }>()
);

export const AutoLogin = createAction('[Auth] Auto Login');

export const LogoutStart = createAction(
  '[Auth] Remove localStorageAuth before logout'
);
export const LogOut = createAction('[Auth] Logout');

export const LogOutSuccess = createAction('[Auth] LogOut Success');

export const ForgotPassword = createAction(
  '[Auth] Forgot Password',
  props<{
    payload: {
      email: string;
    };
  }>()
);

export const ForgotPasswordSuccess = createAction(
  '[Auth] Forgot Password Success'
);

export const ForgotPasswordFailure = createAction(
  '[Auth] Forgot Password Failure',
  props<{
    errorMessage: string;
  }>()
);
