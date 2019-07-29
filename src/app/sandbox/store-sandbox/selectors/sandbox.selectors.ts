import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SandboxState } from '../reducers/sandbox.reducer';

export const selectSandboxState = createFeatureSelector<SandboxState>('sandboxState');

export const selectIsSandboxActive = createSelector(selectSandboxState, (sandboxState: SandboxState) => {
  return sandboxState.isSandboxActivated;
});

export const selectSandboxData = createSelector(selectSandboxState, (sandboxState: SandboxState) => {
  return sandboxState.sandboxData;
});
