import { authReducer, authInitialState } from './auth-state.reducer';

describe('IAuthState Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authReducer(authInitialState, action);

      expect(result).toBe(authInitialState);
    });
  });
});
