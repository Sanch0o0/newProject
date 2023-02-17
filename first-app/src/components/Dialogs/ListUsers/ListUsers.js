import classes from './ListUsers.module.css'
import { Users } from './Users/Users';

export function ListUsers (props){

  return(
    <div className = {classes.dialogsContainer}>
      {props.usersData.map(
        (element, i)=> <Users name={element.name} id={element.id} key = {i}/>
      )}
    </div>
  )
}