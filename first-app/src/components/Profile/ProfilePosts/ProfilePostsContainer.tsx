import { actionsProfile } from '../../../state/profileReducer';
import { AppDispatch, AppStateType } from '../../../state/reduxStore';
import { ProfilePosts } from './ProfilePosts';
import { connect } from 'react-redux';




let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profileReducer.posts,
    postText: state.profileReducer.postText
  }
}

let mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    changeTextArea: (text: string) => {
      dispatch(actionsProfile.updateTextActionCreater(text));
    },
    addPost: () => {
      dispatch(actionsProfile.addPostActionCreater());
    }
  }
}

export const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
