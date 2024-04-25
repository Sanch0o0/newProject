import { Dispatch } from 'redux';
import { stopSubmit } from "redux-form";
import { checkMe, getCaptchaURL, logInUser, logOutUser } from "../api/api";
import { ThunkAction } from 'redux-thunk/es/types';
import { AppStateType, InferActionsType } from './reduxStore';

let initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null,
}

type InitialStateType = typeof initialState;

const setUserData = (state: InitialStateType, newData: any): InitialStateType => {
  return {
    ...state,
    ...newData,
  };
}

const setCaptchaUrl = (state: InitialStateType, captchaUrl: any): InitialStateType => {
  return {
    ...state,
    captchaUrl,
  };
}


export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case  'SET_USER_DATA':
      return setUserData(state, action.data);
    case 'SET_CAPTCHA_URL':
      return setCaptchaUrl(state, action.captchaUrl);
    default:
      return state;
  }
}

type DataType = {
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
}

type ActionType = InferActionsType<typeof actions>;

const actions = {
  setUserDataAC: (id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean) => ({ type: 'SET_USER_DATA', data: { id, login, email, isAuth } } as const),

  setCaptchaURLAction: (captchaUrl: string) => ({ type: 'SET_CAPTCHA_URL', captchaUrl } as const),
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

export const checkMeThunkCreator = () => async (dispatch: Dispatch<ActionType>) => {
  const response = await checkMe();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(actions.setUserDataAC(id, login, email, true));
  }
}


export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return (dispatch) => {
    logInUser(email, password, rememberMe, captcha)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(checkMeThunkCreator());
        } else {
          if (response.resultCode === 10) {
            dispatch(getCaptcha())
          }
          let messages = response.messages.length > 0 ? response.messages[0] : 'Some error';
          // @ts-ignore
          dispatch(stopSubmit('login', { _error: messages }));
        }
      })
  }
}

export const getCaptcha = (): ThunkType => {
  return (dispatch) => {
    getCaptchaURL()
      .then(response => {
        dispatch(actions.setCaptchaURLAction(response.url));
      })
  }
}

export const logOut = (): ThunkType => {
  return (dispatch) => {
    logOutUser()
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(actions.setUserDataAC(null, null, null, false));
        }
      })
  }
}
