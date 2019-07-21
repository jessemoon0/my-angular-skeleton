import { SandboxActions } from '../actions/sandbox.actions';

export interface SandboxState {

}

export const sandboxInitialState: SandboxState = {

};

export function sandboxReducer(state = sandboxInitialState, action: SandboxActions): SandboxState {
  switch (action.type) {

    default:
      return state;
  }
}
