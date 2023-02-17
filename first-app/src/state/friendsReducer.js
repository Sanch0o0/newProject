const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
  users: [
    // { id: 1, name: 'Alex', location: 'Minsk,Belarus', followed: false },
    // { id: 2, name: 'Sasha', location: 'Vitebsk,Belarus', followed: false },
    // { id: 3, name: 'Georgiy', location: 'Molo,Belarus', followed: false },
    // { id: 4, name: 'Zhora', location: 'Vileyka,Belarus', followed: false },
    // { id: 5, name: 'Daniil', location: 'Grodno,Belarus', followed: false },
    // { id: 6, name: 'Max', location: 'Gomel,Belarus', followed: false },
    // { id: 7, name: 'Maksim', location: 'Brest,Belarus', followed: false }
  ],
  pageSize: 20,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
}

const followToUser = (state, userID) => {
  return {
    ...state,
    users: state.users.map(
      user => {
        if (user.id === userID) {
          return { ...user, followed: true };
        }
        return user;
      }
    ),
  }
}

const unfollowToUser = (state, userID) => {
  return {
    ...state,
    users: state.users.map(
      user => {
        if (user.id === userID) {
          return { ...user, followed: false };
        }
        return user;
      }
    ),
  }
}

const setUsers = (state, users) => {
  return {
    ...state,
    users: [...users],
  }
}

const setCurrentPage = (state, pageNumber) => {
  return {
    ...state,
    currentPage: pageNumber,
  }
}

const setTotalCount = (state, totalCount)=>{
  initialState.totalUserCount = totalCount;
  return {
    ...state,
    totalUserCount: totalCount,
  }
}

const setToggle = (state, isFetching)=>{
  return {
    ...state,
    isFetching: isFetching,
  }
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return followToUser(state, action.userID);
    case UNFOLLOW:
      return unfollowToUser(state, action.userID);
    case SET_USERS:
      return setUsers(state, action.users);
    case SET_CURRENT_PAGE:
      return setCurrentPage(state, action.currentPage);
    case SET_TOTAL_COUNT:
      return setTotalCount(state, action.totalCount);
    case TOGGLE_IS_FETCHING:
      return setToggle(state, action.isFetching)
    default:
      return state;
  }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
