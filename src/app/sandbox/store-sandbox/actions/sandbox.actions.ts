import { Action } from '@ngrx/store';

export enum SandboxActionTypes {
  LoadSandbox = '[Sandbox] Load Sandbox'
}

export class LoadSandboxs implements Action {
  readonly type = SandboxActionTypes.LoadSandbox;
  constructor() {}
}

export type SandboxActions = LoadSandboxs;
