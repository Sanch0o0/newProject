import { NavLink } from 'react-router-dom';
import classes from './Friend.module.css';
import { ItemType } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../../../state/reduxStore';
import { unfollowThunkCreator, followThunkCreator } from '../../../state/friendsReducer';
import { useCallback } from 'react';

type PropsType = {
  id: number
  user: ItemType
  // unfollowThunkCreator: (id: number) => void
  // followThunkCreator: (id: number) => void
}

export const Friend: React.FC<PropsType> = (props) => {

  const followingInProgress = useSelector((state: AppStateType) => state.friendsReducer.followingInProgress)

  const dispatch: AppDispatch = useDispatch();

  const unfollowThunkCreatorFunc = (id: number) => {
    //@ts-ignore
    dispatch(unfollowThunkCreator(id));
  }

  const followThunkCreatorFunc = (id: number) => {
    //@ts-ignore
    dispatch(followThunkCreator(id));
  }

  return (

    <div className={classes.friend}>
      <NavLink to={'/profile/' + props.id}>
        <div className={classes.name}>{props.user.name}</div>
      </NavLink>
      <div className={classes.followButtonBox}>
        {(props.user.followed)
          ? <button disabled={followingInProgress.some(id => id === props.id)} onClick={() => {
            unfollowThunkCreatorFunc(props.id)
          }
          } className={classes.follow}>unfollow</button>
          : <button disabled={followingInProgress.some(id => id === props.id)} onClick={() => {
            followThunkCreatorFunc(props.id)
          }
          } className={classes.unfollow}>follow</button>}
      </div>
    </div>
  )
}
