import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducers';

const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getAuthPermission = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.permitted
);
export const getAuthMessage = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.loginMessage
);

export const getUsername = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.username
);

export const getForgotPasswordSuccess = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.forgotPasswordSuccess
);

export const getForgotPasswordFailure = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.forgotPasswordFailure
);
