import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogReducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'hello, everybody!' },
        { message: 'goodbye!!!!' }
      ],
      postText: '',
    },

    messagesPage: {
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
    },
  },

  getState() {
    return this._state
  },

  rerenderEntireTree() { },

  subscriber(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage= profileReducer(this._state.profilePage,action);
    this._state.messagesPage= dialogReducer(this._state.messagesPage,action);

    this.rerenderEntireTree(this._state);
  }
}

