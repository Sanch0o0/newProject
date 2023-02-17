import { NavLink } from 'react-router-dom'
import classes from './Users.module.css'

export function Users (props){
  return(
    <div className = {classes.userContainer}>
      <div className={classes.photo}>
        <div className={classes.photoPlaceHolder}></div>
      </div>
      <div className={classes.userName}>
        <NavLink to={'/messages/' + props.name}> {props.name} </NavLink>
      </div> 
    </div>
  )
}