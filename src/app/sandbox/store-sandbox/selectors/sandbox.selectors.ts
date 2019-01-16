import { createFeatureSelector } from '@ngrx/store';
import { SandboxState } from '../reducers/sandbox.reducer';

export const selectSandboxState = createFeatureSelector<SandboxState>('sandboxState');
