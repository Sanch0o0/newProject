import { UserDataType } from '../../../state/dialogReducer';
import classes from './ListUsers.module.css'
import { Users } from './Users/Users';

type PropsType = {
  usersData: Array<UserDataType>
}

export const ListUsers: React.FC<PropsType> = (props)=>{

  return(
    <div className = {classes.dialogsContainer}>
      {props.usersData.map(
        (element, i)=> <Users name={element.name} id={element.id} key = {i}/>
      )}
    </div>
  )
}