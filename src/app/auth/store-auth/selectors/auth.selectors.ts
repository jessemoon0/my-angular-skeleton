import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from '../reducers/auth-state.reducer';

export const selectAuthState = createFeatureSelector<IAuthState>('authState');

export const isLoggedIn = createSelector(selectAuthState, (authState) => authState.isLoggedIn);
