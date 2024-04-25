import { Messages } from './Messages/Messages';
import classes from './ChatPage.module.css';
import { AddMessageForm } from './AddMessageForm/AddMessageForm';

export const ChatPage: React.FC<{}> = () => {

  return (
    <div>
      <Messages/>
      <AddMessageForm/>
    </div>
  )
}