import { SandboxActions, SandboxActionTypes } from '../actions/sandbox.actions';

export interface SandboxState {
  isSandboxActivated: boolean;
  sandboxData: any[];
}

export const sandboxInitialState: SandboxState = {
  isSandboxActivated: false,
  sandboxData: [
    {
      data: 'test1'
    },
    {
      data: 'test2'
    },
    {
      data: 'test3'
    }
  ]
};

export function sandboxReducer(state = sandboxInitialState, action: SandboxActions): SandboxState {
  switch (action.type) {
    case SandboxActionTypes.SandboxActivated: {
      return {
        ...state, isSandboxActivated: action.payload.isActive
      };
    }
    case SandboxActionTypes.UpdateSandboxDataSet1: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
