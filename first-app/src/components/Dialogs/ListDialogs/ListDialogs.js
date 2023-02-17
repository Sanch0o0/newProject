import classes from './ListDialogs.module.css';
import { UserDialogs } from './UserDialog/UserDialogs';
import React from 'react'; 

export function ListDialogs(props) {

  let newMessage = React.createRef();

  const changeTextArea  = () => {
    props.changeTextArea(newMessage.current.value);
  }

  const onAddMessage =(e)=>{
    e.preventDefault();
    props.addMessage()
  }

  return (
    <div className={classes.dialogsContainer}>
      {props.dialogsData.map(
        (element, i ) => <UserDialogs name={element.name} message={element.message} key = {i}/>
      )}
      <form className={classes.createPostsLabel}>
        <input className={classes.createPostInput} 
          ref={newMessage}
          value={props.messageText}
          onChange={ changeTextArea }></input>
        <button className={classes.createPostButton} onClick={ onAddMessage }>Send</button>
      </form>
    </div>
  )
}
