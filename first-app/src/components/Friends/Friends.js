import classes from './Friends.module.css';
import { Friend } from './Friend/Friend';
import axios from 'axios';

export const Friends = (props) => {

  const getUsers = () => {
    if (props.users.length === 0) {
      props.setToggle(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
        .then(response => {
          props.setToggle(false);
          props.setUsers(response.data.items);
          props.setTotalUsersCount(response.data.totalCount)
        })
    }
  }

  getUsers()

  const setCurrentPage = (page) => {
    props.setCurrentPage(page);
    props.setToggle(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`)
      .then(response => {
        props.setToggle(false);
        props.setUsers(response.data.items)
      })
  }

 // let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pageCount = 10;
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  } 

  return (
    <>
      <div className={classes.friendsContainer}>
        <div className={classes.headerText}>Friends</div>
        {props.isFetching ? <span> downloading </span> : null}
        <div className={classes.friends}>
          {props.users.map(user =>
            <Friend
              follow={props.follow}
              unfollow={props.unFollow}
              user={user}
              id={user.id}
              key={user.id} />)}
        </div>
        <div className={classes.pageButtons}>
          {pages.map(p => {
            return <span
              className={(props.currentPage === p) ? classes.selectedPage : classes.new}
              onClick={() => setCurrentPage(p)}>{p}</span>
          })}
        </div>
      </div >
    </>
  )
}