import { type } from 'os';
import { Message } from './Message/Message';
import classes from './Messages.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startMessagesListening, stopMessagesListening } from '../../../../state/chatReducer';
import { AppStateType } from '../../../../state/reduxStore';


export const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

export const Messages: React.FC<{}> = () => {

  // const [messages, setMessages] = useState<ChatMessageType[]>([]);

  // useEffect(()=>{
  //   ws.addEventListener('message', (e)=>{
  //     let newMessage =JSON.parse(e.data);
  //     setMessages((prevMessages) => [...prevMessages, ...newMessage]);
  //   })
  // },[] || ws);

  const messages = useSelector((state: AppStateType) => state.chatReducer.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(startMessagesListening());
    return ()=>{
      //@ts-ignore
      dispatch(stopMessagesListening());
    }
  }, [])

  return (
    <div className={classes.messagesBox}>
      {/* @ts-ignore */}
      {messages.map((m, index) => { return <Message key={index} message={m} /> })}
    </div>
  )
}