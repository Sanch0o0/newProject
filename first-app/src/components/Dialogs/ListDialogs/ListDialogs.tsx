import { DialogType } from '../../../state/dialogReducer';
import classes from './ListDialogs.module.css';
import { UserDialogs } from './UserDialog/UserDialogs';
import React from 'react';

type PropsType = {
  dialogsData: Array<DialogType>
  messageText: string
  changeTextArea: (text: string) => void
  addMessage: () => void
}

export const ListDialogs: React.FC<PropsType> = (props) => {

  let newMessage = React.createRef<HTMLInputElement>();

  const changeTextArea = () => {
    if (newMessage.current) {
      props.changeTextArea(newMessage.current.value);
    }
  }

  const onAddMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.addMessage()
  }

  return (
    <div className={classes.dialogsContainer}>
      <div className={classes.dialogBox}>
        {props.dialogsData.map(
          (element, i) => <UserDialogs name={element.name} message={element.message} key={i} />
        )}
      </div>
      <form className={classes.createPostsLabel}>
        <input className={classes.createPostInput}
          ref={newMessage}
          value={props.messageText}
          onChange={changeTextArea}></input>
        <button className={classes.createPostButton} onClick={onAddMessage}>Send</button>
      </form>
    </div>
  )
}
