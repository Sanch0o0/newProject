import { connect } from 'react-redux';
import { ListUsers } from './ListUsers';
import { AppStateType } from '../../../state/reduxStore';


const mapStateToProps = (state: AppStateType) => {
  return {
    usersData: state.dialogReducer.usersData
  }
}

const mapDispatchToProps = () => {
  return {}
}

export const ListUsersContainer = connect(mapStateToProps, mapDispatchToProps)(ListUsers);