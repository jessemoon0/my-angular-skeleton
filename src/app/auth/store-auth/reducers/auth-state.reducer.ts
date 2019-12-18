import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { IUser } from '../../interfaces';

export interface IAuthState {
  isLoggedIn: boolean;
  user: IUser;
}

export const authInitialState: IAuthState = {
  isLoggedIn: false,
  user: undefined
};

export function authReducer(state = authInitialState, action: AuthActions): IAuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction: {
      return {
        isLoggedIn: true,
        user: action.payload.user
      };
    }
    case AuthActionTypes.LogoutAction: {
      return {
        isLoggedIn: false,
        user: undefined
      };
    }
    default:
      return state;
  }
}
