import { Action } from '@ngrx/store';
import { IUser } from '../../interfaces';

export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  LogoutAction = '[Auth] Logout'
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: { user: IUser }) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = LoginAction | LogoutAction;
