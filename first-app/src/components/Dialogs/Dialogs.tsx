import classes from './Dialogs.module.css'
import  ListDialogsContainer  from './ListDialogs/ListDialogsContainer'
import { ListUsersContainer } from './ListUsers/ListUsersContainer'

export const Dialogs:React.FC = () => {
  return (
    <div className={classes.dialogsContainer}>
      <ListUsersContainer />
      <ListDialogsContainer />
    </div>
  )
}