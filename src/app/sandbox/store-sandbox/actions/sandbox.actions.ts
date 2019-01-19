import { Action } from '@ngrx/store';

export enum SandboxActionTypes {
  LoadSandbox = '[Sandbox] Load Sandbox'
}

export class LoadSandbox implements Action {
  readonly type = SandboxActionTypes.LoadSandbox;
  constructor() {}
}

export type SandboxActions = LoadSandbox;
