import { Action } from '@ngrx/store';

export enum SandboxActionTypes {
  SandboxActivated = '[Sandbox] Sandbox activated',
  UpdateSandboxDataSet1 = '[Sandbox] Update a sandbox dataset position 1'
}

export class SandboxActivated implements Action {
  readonly type = SandboxActionTypes.SandboxActivated;
  constructor(public payload: { isActive: boolean }) {}
}

export class UpdateSandboxDataSet1 implements Action {
  readonly type = SandboxActionTypes.UpdateSandboxDataSet1;
  constructor(public payload: { data: 'test5' }) {}
}

export type SandboxActions = SandboxActivated | UpdateSandboxDataSet1;
