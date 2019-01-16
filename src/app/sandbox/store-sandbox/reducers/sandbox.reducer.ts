import { SandboxActions } from '../actions/sandbox.actions';

export interface SandboxState {

}

export const initialState: SandboxState = {

};

export function reducer(state = initialState, action: SandboxActions): SandboxState {
  switch (action.type) {

    default:
      return state;
  }
}
