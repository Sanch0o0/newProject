import { connect } from 'react-redux';
import { ListUsers } from './ListUsers';

// export function ListUsers (props){

//   return(
//     <div className = {classes.dialogsContainer}>
//       {props.usersData.map(
//         element=> <Users name={element.name} id={element.id}/>
//       )}
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    usersData: state.dialogReducer.usersData
  }
}

const mapDispatchToProps = () => {
  return {}
}

export const ListUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListUsers);