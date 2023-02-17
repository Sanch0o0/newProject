import classes from './UserDialogs.module.css'

export function UserDialogs (props){
  return(
    <div className = {classes.messageContainer}>
        <div className={classes.userName}>
          {props.name}
        </div>
        <div className={classes.userMessage}>
          {props.message}
        </div>  
    </div>
  )
}