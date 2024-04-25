import { connect } from 'react-redux';
import { getUsersThunkCreator, FilterType } from '../../state/friendsReducer';
import { Friends } from './Friends';
import { useEffect } from 'react';
import { AppStateType } from '../../state/reduxStore';
import { useLocation, useSearchParams } from 'react-router-dom';

type MapStateToPropsType = {
 // users: Array<ItemType>
  pageSize: number
  //totalUserCount: number
  currentPage: number
  //followingInProgress: Array<number>
  filter: FilterType
}

type MapDispatchToPropsType = {
  getUsersThunkCreator: (currentPage: number, pageSize: number, term: string, friend: null | boolean ) => void
  //unfollowThunkCreator: (id: number) => void
  //followThunkCreator: (id: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    // users: state.friendsReducer.users,
    pageSize: state.friendsReducer.pageSize,
    //totalUserCount: state.friendsReducer.totalUserCount,
    currentPage: state.friendsReducer.currentPage,
    // followingInProgress: state.friendsReducer.followingInProgress,
    filter: state.friendsReducer.filter
  }
}

const FriendsContainer: React.FC<PropsType> = (props) => {

  const location = useLocation()

  const [searchParams] = useSearchParams(location.search)



  useEffect(() => {
    let parsed= Object.fromEntries([...searchParams]);
  
    let actualPage = props.currentPage;
    let actualFilter = props.filter;

    if (parsed.page) actualPage = Number(parsed.page);
    if (parsed.term) actualFilter = {...actualFilter, term: parsed.term}
    if (parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false }

    props.getUsersThunkCreator(actualPage, props.pageSize, actualFilter.term , actualFilter.friend);
  }, [])

  const setCurrentPage = (page: number) => {
    props.getUsersThunkCreator(page, props.pageSize, props.filter.term, props.filter.friend);
  }

  const onFilterChanged = (term: string, friend: null | boolean) =>{
    props.getUsersThunkCreator(1, props.pageSize, term, friend);
  }

  return (
    <Friends
      currentPage={props.currentPage}
      setCurrentPage={setCurrentPage}
      // users={props.users}
      // unfollowThunkCreator={props.unfollowThunkCreator}
      // followThunkCreator={props.followThunkCreator}
      // followingInProgress={props.followingInProgress}
      onFilterChanged={onFilterChanged}
    />
  )
}
//@ts-ignore
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
  (mapStateToProps, {
    getUsersThunkCreator,
  })
  (FriendsContainer);
