import { checkMeThunkCreator } from "./authReducer";
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsType } from './reduxStore';


let initialState = {
  initialized: false as boolean
}

type InitialStateType = typeof initialState;

const setInitialized = (state: InitialStateType): InitialStateType => {
  return {
    ...state,
    initialized: true,
  };
}

export const appReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return setInitialized(state);
    default:
      return state;
  }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

const actions = {
  setInitializedAC: () => ({ type: 'SET_INITIALIZED' } as const)
}

type ActionsType = InferActionsType<typeof actions>

export const initializeApp = (): ThunkType => {
  return (dispatch) => {
    dispatch(checkMeThunkCreator())
      .then(() => {
        dispatch(actions.setInitializedAC());
      })
  }
}
