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
