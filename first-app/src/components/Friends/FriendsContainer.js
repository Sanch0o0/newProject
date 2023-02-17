import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC,setCurrentPageAC,setTotalCountAC,toggleIsFetchingAC } from '../../state/friendsReducer';
import { Friends } from './Friends';

const mapStateToProps = (state) => {
  return {
    users: state.friendsReducer.users,
    pageSize: state.friendsReducer.pageSize,
    totalUserCount: state.friendsReducer.totalUserCount,
    currentPage: state.friendsReducer.currentPage,
    isFetching: state.friendsReducer.isFetching
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID))
//     },
//     unFollow: (userID) => {
//       dispatch(unfollowAC(userID))
//     },
//     setUsers: (users) =>{
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) =>{
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount)=>{
//       dispatch(setTotalCountAC(totalCount))
//     },
//     setToggle: (isFetching)=>{
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }


export const FriendsContainer = connect(mapStateToProps, {
  follow: followAC,
  unFollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalCountAC,
  setToggle: toggleIsFetchingAC})
  (Friends);
