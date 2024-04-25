import classes from './Friends.module.css';
import { Friend } from './Friend/Friend';
import { PaginationContainer } from './PaginationContainer';
import { ItemType, UsersType } from '../../types/types';
import { FriendsSearch } from './FriendsSearch/FriendsSearch';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../state/reduxStore';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

type PropsType = {
  currentPage: number
  setCurrentPage: (p: number) => void
  // totalUserCount: number
  // users: Array<ItemType>
  // unfollowThunkCreator: (id: number) => void
  // followThunkCreator: (id: number) => void
  // followingInProgress: Array<number>
  onFilterChanged: (text: string, friend: null | boolean) => void
}

export const Friends: React.FC<PropsType> = (props) => {

  const totalUserCount = useSelector((state: AppStateType)=>state.friendsReducer.totalUserCount);
  const users = useSelector((state: AppStateType)=> state.friendsReducer.users);
  const filter = useSelector((state: AppStateType)=> state.friendsReducer.filter);
  const pageSize = useSelector((state: AppStateType)=> state.friendsReducer.pageSize)

  const navigate = useNavigate();

  useEffect(()=>{
    navigate(`?page=${props.currentPage}&term=${filter.term}&friend=${filter.friend}`)
    // page=${props.currentPage}&count=${pageSize}&
  }, [filter, props.currentPage])

  return (
    <>
      <div className={classes.friendsContainer}>
        <div className={classes.headerText}>Friends</div>
        <FriendsSearch onFilterChanged={props.onFilterChanged}/>
        <div className={classes.friends}>
          {users.map((user: any) =>
            <Friend
              key={user.id}
              user={user}
              id={user.id} />)}
        </div>
        <PaginationContainer
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          totalUserCount={totalUserCount} />
      </div >
    </>
  )
}

function createBrowserHistory() {
  throw new Error('Function not implemented.');
}
