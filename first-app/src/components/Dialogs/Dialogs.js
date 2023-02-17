import classes from './Dialogs.module.css'
import { ListDialogsContainer } from './ListDialogs/ListDialogsContainer'
import { ListUsersContainer } from './ListUsers/ListUsersContainer'

export function Dialogs(props) {
  return (
    <div className={classes.dialogsContainer}>
      <ListUsersContainer  />
      <ListDialogsContainer />
    </div>
  )
}