import { InferActionsType } from './reduxStore';

export type DialogType = {
  name: string,
  message: string
}

export type UserDataType = {
  id: number,
  name: string
}


let initialState = {
  dialogsData: [
    { name: ' Andrey', message: 'Hello, how arte you?' },
    { name: ' Max', message: 'Im fine, and you?' },
    { name: ' Alex', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' Sasha', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' Kate', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' John', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' Mike', message: 'qwertyqwertyqwertyqwertyqwerty' },
  ] as Array<DialogType>,

  newMessageText: '' as string,

  usersData: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Max' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Kate' },
    { id: 6, name: 'John' },
    { id: 7, name: 'Mike' },
  ] as Array<UserDataType>,
}

type InitialStateType = typeof initialState;

const addNewMessage = (state: InitialStateType): InitialStateType => {
  return {
    ...state,
    newMessageText: '',
    dialogsData: [...state.dialogsData, { name: ' Mike', message: state.newMessageText }],
  };
}

const updateMessageText = (state: InitialStateType, newPostText: string): InitialStateType => {
  return {
    ...state,
    newMessageText: newPostText,
  };
}

export const dialogReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return addNewMessage(state);
    case 'UPDATE-MESSAGE':
      return updateMessageText(state, action.text);
    default:
      return state;
  }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
  addMessageActionCreater: () => ({ type: 'ADD_MESSAGE' } as const),

  updateMessageActionCreater: (text: string) => ({ type: 'UPDATE-MESSAGE', text } as const)
}