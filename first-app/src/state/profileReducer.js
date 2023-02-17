const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let initialState = {
  posts: [
    { message: 'hello, everybody!' },
    { message: 'goodbye!!!!' }
  ],
  postText: '',
}

const updatePostText = (state, newPostText) => {
  return {
    ...state,
    postText: newPostText,
  }
}

const addNewPost = (state) => {
  return {
    ...state,
    postText: '',
    posts: [...state.posts, { message: state.postText }],
  }
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return addNewPost(state);
    case UPDATE_TEXT:
      return updatePostText(state, action.text)
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateTextActionCreater = (text) => ({ type: UPDATE_TEXT, text })
