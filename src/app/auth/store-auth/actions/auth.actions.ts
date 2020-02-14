import { Action } from '@ngrx/store';
import { IUser } from '../../models';

export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  LogoutAction = '[Auth] Logout'
}

export class LoginAction implements Action {
  public readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: { user: IUser }) {}
}

export class LogoutAction implements Action {
  public readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = LoginAction | LogoutAction;
