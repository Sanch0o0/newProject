import { ThunkAction } from "redux-thunk/es/types";
import { getUserProfile, getUserStatus, setUserStatus, saveUserPhoto, saveProfileAPI } from "../api/api";
import { AppStateType, InferActionsType } from "./reduxStore";
import { PhotosType, ProfileType } from "../types/types";

export type PostType = {
  message: string
}

let initialState = {
  posts: [
    { message: 'hello, everybody!' },
    { message: 'goodbye!!!!' }
  ] as Array<PostType>,
  postText: '' as string,
  profile: null as ProfileType | null,
  status: null as string | null,
}

type InitialStateType = typeof initialState;

const updatePostText = (state: InitialStateType, newPostText: string): InitialStateType => {
  return {
    ...state,
    postText: newPostText,
  }
}

const addNewPost = (state: InitialStateType): InitialStateType => {
  return {
    ...state,
    postText: '',
    posts: [...state.posts, { message: state.postText }] as Array<PostType>,
  }
}

const setUserProfile = (state: InitialStateType, profile: ProfileType): InitialStateType => {
  return {
    ...state,
    profile
  }
}

const setStatusText = (state: InitialStateType, status: string | null): InitialStateType => {
  return {
    ...state,
    status
  }
}

const setUserPhoto = (state: InitialStateType, photos: PhotosType): InitialStateType => {
  return {
    ...state,
    profile: { ...state.profile, photos } as ProfileType
  }
}

export const profileReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD_POST':
      return addNewPost(state);
    case 'UPDATE_TEXT':
      return updatePostText(state, action.text);
    case 'SET_USER_PROFILE':
      return setUserProfile(state, action.profile);
    case 'SET_USER_STATUS':
      return setStatusText(state, action.status);
    case 'SAVE_PHOTO_SUCCESS':
      return setUserPhoto(state, action.photos);
    default:
      return state;
  }
}

type ActionsType = InferActionsType<typeof actionsProfile>

export const actionsProfile = {
  addPostActionCreater: () => ({ type: 'ADD_POST' } as const),
  updateTextActionCreater: (text: string) => ({ type: 'UPDATE_TEXT', text } as const),
  setUserProfileActionCreater: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
  setUserStatusActionCreater: (status: string) => ({ type: 'SET_USER_STATUS', status } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const),
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const setUserProdile = (userId: number): ThunkType => {
  return (dispatch) => {
    getUserProfile(userId)
      .then(response => {
        dispatch(actionsProfile.setUserProfileActionCreater(response));
      });
    getUserStatus(userId)
      .then(response => {
        dispatch(actionsProfile.setUserStatusActionCreater(response));
      })
  }
}

export const setStatus = (statusText: string): ThunkType => {
  return (dispatch) => {
    setUserStatus(statusText)
      .then(response => {
        dispatch(actionsProfile.setUserStatusActionCreater(statusText));
      })
  }
}

export const savePhoto = (file: File): ThunkType => {
  return (dispatch) => {
    saveUserPhoto(file)
      .then(response => {
        console.log(response)
        dispatch(actionsProfile.savePhotoSuccess(response.data.photos));
      })
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => {
  return (dispatch, getState) => {
    let id = getState().authReducer.id;
    saveProfileAPI(profile)
      .then(response => {
        if (response.resultCode === 0) {
          // @ts-ignore
          dispatch(setUserProdile(id));
        }
      })
  }
}
