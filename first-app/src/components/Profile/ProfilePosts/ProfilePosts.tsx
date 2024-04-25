import { PostType } from '../../../state/profileReducer';
import { PostElement } from './PostElement/PostElement';
import classes from './ProfilePosts.module.css';
import React from 'react';

type PropsType = {
  changeTextArea: (text: string) => void
  addPost: () => void
  postText: string 
  posts: Array<PostType>
}

export const ProfilePosts: React.FC<PropsType> = (props) => {

  let newPost = React.createRef<HTMLInputElement>();

  const changeTextArea = () => {
    if (newPost.current) {
      props.changeTextArea(newPost.current.value)
    }
  }

  const onAddPost = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.addPost();
  }

  return (
    <div className={classes.profilePosts}>
      <div className={classes.profilePostDescription}>My Posts</div>
      <form className={classes.createPostsLabel}>
        <input className={classes.createPostInput}
          ref={newPost}
          value={props.postText}
          onChange={changeTextArea}></input>
        <button className={classes.createPostButton} onClick={onAddPost}>Send</button>
      </form>
      <div className={classes.profilePostsList}>
        {props.posts.map((post, i) => <PostElement message={post.message} key={i} />)}
      </div>
    </div>
  )
}