import { sandboxReducer, sandboxInitialState } from './sandbox.reducer';

describe('Sandbox Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = sandboxReducer(sandboxInitialState, action);

      expect(result).toBe(sandboxInitialState);
    });
  });
});
