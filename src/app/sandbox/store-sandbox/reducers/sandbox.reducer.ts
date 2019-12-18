import { SandboxActions, SandboxActionTypes } from '../actions/sandbox.actions';

export interface ISandboxState {
  isSandboxActivated: boolean;
  sandboxData: any[];
}

export const sandboxInitialState: ISandboxState = {
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

export function sandboxReducer(state = sandboxInitialState, action: SandboxActions): ISandboxState {
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
