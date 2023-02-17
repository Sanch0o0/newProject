import React from 'react';
import { addPostActionCreater, updateTextActionCreater } from '../../../state/profileReducer';
import { ProfilePosts } from './ProfilePosts';
import { connect } from 'react-redux';

// export function ProfilePostsContainer(props) {

//   const changeTextArea = (text) => {
//     props.dispatch(updateTextActionCreater(text));
//   }

//   const addPost = (e) => {
//     props.dispatch(addPostActionCreater());
//   }

//   return (
//     <ProfilePosts
//       addPost={addPost}
//       changeTextArea={changeTextArea}
//       posts={props.posts}
//       postText={props.postText} />
//   )
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    postText: state.profileReducer.postText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeTextArea: (text) => {
      dispatch(updateTextActionCreater(text));
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    }
  }
}

export const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
