import classes from './UserDialogs.module.css'

type PropsType = {
  name: string
  message: string
}

export const UserDialogs: React.FC<PropsType> = (props) => {
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