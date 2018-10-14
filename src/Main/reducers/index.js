import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import auth, * as fromAuth from './auth.js';
import echo, * as fromEcho from './echo.js';
import profile from './profile';
import registration from './registration';

export default combineReducers({
  auth: auth,
  echo: echo,
  router: routerReducer,
  form: formReducer,
  profile: profile,
  registration,
});

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth);
export const accessToken = state => fromAuth.accessToken(state.auth);
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken = state => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth);
export const authErrors = state => fromAuth.errors(state.auth);
export const serverMessage = state => fromEcho.serverMessage(state.echo);

export function withAuth(headers = {}) {
  return state => ({
    ...headers,
    Authorization: `Bearer ${accessToken(state)}`,
  });
}
