import { getUsers, unfollowUser, followUser } from "../api/api";
import { ItemType, UsersType } from "../types/types";
import { AppStateType, InferActionsType } from "./reduxStore";
import { ThunkAction } from "redux-thunk/es/types";

let initialState = {
  users: [] as Array<ItemType>,
  pageSize: 15,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
  filter: {
    term: '',
    friend: null as null | boolean
  }
}

export type FilterType = {
  term: string,
  friend: null | boolean
}

type InitialStateType = typeof initialState;

const followToUser = (state: InitialStateType, userID: number): InitialStateType => {
  return {
    ...state,
    users: state.users.map(
      (user: any) => {
        if (user.id === userID) {
          return { ...user, followed: true };
        }
        return user;
      }
    ) as any,
  }
}

const unfollowToUser = (state: InitialStateType, userID: number): InitialStateType => {
  return {
    ...state,
    users: state.users.map(
      (user: any) => {
        if (user.id === userID) {
          return { ...user, followed: false };
        }
        return user;
      }
    ) as any,
  }
}

const setUsers = (state: InitialStateType, users: Array<ItemType>): InitialStateType => {
  return {
    ...state,
    users: [...users]
  }
}

const setCurrentPage = (state: InitialStateType, pageNumber: number): InitialStateType => {
  return {
    ...state,
    currentPage: pageNumber,
  }
}

const setTotalCount = (state: InitialStateType, totalCount: number): InitialStateType => {
  initialState.totalUserCount = totalCount;
  return {
    ...state,
    totalUserCount: totalCount,
  }
}

const setToggle = (state: InitialStateType, isFetching: boolean): InitialStateType => {
  return {
    ...state,
    isFetching: isFetching,
  }
}

const setToggleFollowing = (state: InitialStateType, isFetching: boolean, userId: number): InitialStateType => {
  return {
    ...state,
    followingInProgress: isFetching
      ? [...state.followingInProgress, userId]
      : state.followingInProgress.filter(id => id !== userId) as Array<number>,
  }
}

const setFilterState = (state: InitialStateType, payload: FilterType): InitialStateType => {
  return {
    ...state,
    filter: payload,
  }
}

export const friendsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return followToUser(state, action.userID);
    case 'UNFOLLOW':
      return unfollowToUser(state, action.userID);
    case 'SET_USERS':
      return setUsers(state, action.users);
    case 'SET_CURRENT_PAGE':
      return setCurrentPage(state, action.currentPage);
    case 'SET_TOTAL_COUNT':
      return setTotalCount(state, action.totalCount);
    case 'TOGGLE_IS_FETCHING':
      return setToggle(state, action.isFetching)
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return setToggleFollowing(state, action.isFetching, action.userId);
    case 'SET_FILTER':
      return setFilterState(state, action.payload);
    default:
      return state;
  }
}

type ActionsType = InferActionsType<typeof actions>;

const actions = {
  followAC: (userID: number) => ({ type: 'FOLLOW', userID } as const),
  unfollowAC: (userID: number) => ({ type: 'UNFOLLOW', userID } as const),
  setUsersAC: (users: Array<ItemType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPageAC: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
  setTotalCountAC: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
  toggleIsFetchingAC: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
  toggleIsFollowingProgressAC: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
  setFilter: (filter: FilterType) => ({type: 'SET_FILTER', payload: filter} as const)
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number, term: string, friend: null | boolean): ThunkType => {
  return (dispatch) => {
    const filter = {
      term, 
      friend
    }
    dispatch(actions.toggleIsFetchingAC(true));
    if (initialState.users.length === 0) {
      dispatch(actions.setFilter(filter));
      getUsers(currentPage, pageSize, term, friend)
        .then(response => {
          dispatch(actions.setCurrentPageAC(currentPage));
          dispatch(actions.toggleIsFetchingAC(false));
          dispatch(actions.setUsersAC(response.items));
          dispatch(actions.setTotalCountAC(response.totalCount));
        })
    }
  }
}

export const unfollowThunkCreator = (id: number): ThunkType => {
  return (dispatch) => {
    dispatch(actions.toggleIsFollowingProgressAC(true, id))
    unfollowUser(id)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(actions.unfollowAC(id));
        }
        dispatch(actions.toggleIsFollowingProgressAC(false, id))
      });
  }
}

export const followThunkCreator = (id: number): ThunkType => {
  return (dispatch) => {
    dispatch(actions.toggleIsFollowingProgressAC(true, id))
    followUser(id)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(actions.followAC(id));
        }
        dispatch(actions.toggleIsFollowingProgressAC(false, id))
      });
  }
}