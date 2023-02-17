import { PostElement } from './PostElement/PostElement';
import classes from './ProfilePosts.module.css';
import React from 'react';

export function ProfilePosts(props) {

  let newPost = React.createRef();

  const changeTextArea  = () => {
    props.changeTextArea(newPost.current.value);
  }

  const onAddPost = (e) => {
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
          onChange={ changeTextArea }></input>
        <button className={classes.createPostButton} onClick={onAddPost}>Send</button>
      </form>
      <div className={classes.profilePostsList}>
        {props.posts.map((post, i) => <PostElement message={post.message} key = {i} />)}
      </div>
    </div>
  )
}