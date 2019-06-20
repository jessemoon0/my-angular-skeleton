import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from '../../interfaces';

export interface AuthState {
  isLoggedIn: boolean;
  user: User;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  user: undefined
};

export function authReducer(state = authInitialState, action: AuthActions): AuthState {
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
