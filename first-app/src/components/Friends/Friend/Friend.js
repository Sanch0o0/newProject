import { NavLink } from 'react-router-dom';
import classes from './Friend.module.css'

export function Friend(props) {

  const followToUser = (id) => {
    props.follow(id);
  }

  const unfollowToUser = (id) => {
    props.unfollow(id)
  }

  return (
    <div className={classes.friend}>
      <NavLink to={'/profile/' + props.id}>
        <div className={classes.name}>{props.user.name}</div>
      </NavLink>
      <div className={classes.location}>{props.user.location}</div>
      <div className={classes.followButtonBox}>
        {(props.user.followed)
          ? <button onClick={() => unfollowToUser(props.id)} className={classes.follow}>follow</button>
          : <button onClick={() => followToUser(props.id)} className={classes.unfollow}>unfollow</button>}
      </div>
    </div>
  )
}
