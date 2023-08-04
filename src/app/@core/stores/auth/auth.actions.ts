import { createAction, props } from '@ngrx/store';
import { Notification } from '../../interfaces';
import { User } from '../../interfaces/auth.interface';

export const LoginStart = createAction(
<<<<<<< HEAD
  '[Auth] Login start',
=======
  '[Auth] Login Start',
>>>>>>> 8445dd6b1388ad8b8666c66aede94492828cbf7e
  props<{ username: string; password: string }>()
);

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ username: string }>()
);

export const LoginFailed = createAction(
<<<<<<< HEAD
  '[Auth] Login failed',
=======
  '[Auth] Login Failed',
>>>>>>> 8445dd6b1388ad8b8666c66aede94492828cbf7e
  props<{ payload: string }>()
);

export const AutoLogin = createAction('[Auth] Auto Login');

<<<<<<< HEAD
export const LogoutStart = createAction(
  '[Auth] Remove localStorageAuth before logout'
);
export const LogOut = createAction('[Auth] Logout');

export const LogOutSuccess = createAction('[Auth] LogOut Success');
=======
export const LogoutStart = createAction('[Auth] Logout Start');
export const logOut = createAction('[Auth] Logout');

export const logOutSuccess = createAction('[Auth] LogOut Success');
>>>>>>> 8445dd6b1388ad8b8666c66aede94492828cbf7e

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
