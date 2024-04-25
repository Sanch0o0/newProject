import { chatAPI } from './../api/chatApi';
import { ChatMessageType } from './../components/pages/ChatPage/Messages/Messages';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsType } from './reduxStore';


let initialState = {
  messages: [] as ChatMessageType[]
}

type InitialStateType = typeof initialState;

const setInitialized = (state: InitialStateType, payload: ChatMessageType[]): InitialStateType => {
  return {
    ...state,
    messages: [...state.messages, ...payload]
  };
}

export const chatReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'MESSAGES_RECEIVED':
      return setInitialized(state, action.payload);
    default:
      return state;
  }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

const actions = {
  messagesReceived: (messages: ChatMessageType[]) => ({ type: 'MESSAGES_RECEIVED', payload: messages } as const)
}

type ActionsType = InferActionsType<typeof actions>

export const startMessagesListening = (): ThunkType => {
  return (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe( (messages)=>{
      dispatch(actions.messagesReceived(messages))
    })
  }
}

export const stopMessagesListening = (): ThunkType => {
  return (dispatch) => {
    chatAPI.stop();
    chatAPI.subscribe( (messages)=>{
      dispatch(actions.messagesReceived(messages))
    })
  }
}

export const sendMessageFunc = (message: string): ThunkType => {
  return (dispatch) => {
    chatAPI.sendMessage(message);
  }
}
