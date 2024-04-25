import { ChatMessageType } from '../Messages'
import classes from './Message.module.css'

type PropsType = {
  message: ChatMessageType
}

export const Message: React.FC<PropsType> = (props) => {

  return (
    <div className={classes.messageBox}>
      <img className={classes.avatar} src={props.message.photo} />

      <span>{props.message.userName}: </span>
      <span>{props.message.userId}: </span>
      <span>{props.message.message}</span>
    </div>
  )
}