import classes from './Profile.module.css'
import { ProfileDescription } from './Description/Description';
import { ProfilePostsContainer } from './ProfilePosts/ProfilePostsContainer';

export function Profile() {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileImgBig}>
        <img src='https://img5.goodfon.ru/wallpaper/nbig/6/42/peiz-priroda-voda-nebo.jpg' alt=''></img>
      </div>
      <ProfileDescription />
      <ProfilePostsContainer />
    </div>
  );
}