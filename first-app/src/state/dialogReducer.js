const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
  dialogsData: [
    { name: ' Andrey', message: 'Hello, how arte you?' },
    { name: ' Max', message: 'Im fine, and you?' },
    { name: ' Alex', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' Sasha', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' Kate', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' John', message: 'qwertyqwertyqwertyqwertyqwerty' },
    { name: ' Mike', message: 'qwertyqwertyqwertyqwertyqwerty' },
  ],

  newMessageText: '',

  usersData: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Max' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Kate' },
    { id: 6, name: 'John' },
    { id: 7, name: 'Mike' },
  ],
}

const addNewMessage = (state) => {
  return {
    ...state,
    newMessageText: '',
    dialogsData: [...state.dialogsData, { name: ' Mike', message: state.newMessageText }],
  };
}

const updateMessageText = (state, newPostText) => {
  return {
    ...state,
    newMessageText: newPostText,
  };
}

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return addNewMessage(state);
    case UPDATE_MESSAGE:
      return updateMessageText(state, action.text);
    default:
      return state;
  }
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })
export const updateMessageActionCreater = (text) => ({ type: UPDATE_MESSAGE, text })
