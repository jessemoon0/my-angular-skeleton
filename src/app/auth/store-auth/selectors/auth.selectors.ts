import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth-state.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('authState');

export const isLoggedIn = createSelector(selectAuthState, (authState) => authState.isLoggedIn);
