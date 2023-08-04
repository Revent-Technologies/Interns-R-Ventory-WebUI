import { createAction, props } from '@ngrx/store';
import { Notification } from '../../interfaces';
import { User } from '../../interfaces/auth.interface';

export const LoginStart = createAction(
  '[Auth] Login Start',
  props<{ username: string; password: string }>()
);

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ username: string }>()
);

export const LoginFailed = createAction(
  '[Auth] Login Failed',
  props<{ payload: string }>()
);

export const autoLogin = createAction('[Auth] Auto Login');

export const LogoutStart = createAction('[Auth] Logout Start');
export const logOut = createAction('[Auth] Logout');

export const logOutSuccess = createAction('[Auth] LogOut Success');

export const ForgotPassword = createAction(
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
