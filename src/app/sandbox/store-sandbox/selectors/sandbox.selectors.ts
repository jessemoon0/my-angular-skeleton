import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISandboxState } from '../reducers/sandbox.reducer';

export const selectSandboxState = createFeatureSelector<ISandboxState>('sandboxState');

export const selectIsSandboxActive = createSelector(selectSandboxState, (sandboxState: ISandboxState) => {
  return sandboxState.isSandboxActivated;
});

export const selectSandboxData = createSelector(selectSandboxState, (sandboxState: ISandboxState) => {
  return sandboxState.sandboxData;
});
