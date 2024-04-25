import { useState } from 'react'
import classes from './AddMessageForm.module.css'
import { ws } from '../Messages/Messages';

export const AddMessageForm: React.FC<{}> = () => {
  const [message, setMessage] = useState('');

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!message){
      return
    }
    ws.send(message);
    setMessage('');
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input 
        onChange={(e)=>setMessage(e.currentTarget.value)}
        value={message}></input>
        <button>send</button>
      </form>
    </div>
  )
}