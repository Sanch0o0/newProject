import classes from './PostElement.module.css'

export function PostElement(props){
  return(
      <div className={classes.profilePostsItem}>
        <div className={classes.profilePostPhoto}>
          <img src='https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp' alt=''></img>
        </div>
        <div className={classes.profilePostRight}>
          <div className={classes.profilePostName}>John Doe</div>
          <div className={classes.profilePostContent}>{props.message}</div>
        </div>
      </div>
  )
}