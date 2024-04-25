import classes from './Profile.module.css'
import { ProfileDescription } from './Description/Description';
import { ProfilePostsContainer } from './ProfilePosts/ProfilePostsContainer';
import { ProfileType } from '../../types/types';

type PropsType = {
  savePhoto: (photo: any) => void
  saveProfile: (formData: any)=>void
  isOwner: boolean
  profile: ProfileType
  status: string 
  setStatus: (text: string)=>void
}

export const Profile: React.FC<PropsType> = (props) => {

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profileImgBig}>
        <img src='https://img5.goodfon.ru/wallpaper/nbig/6/42/peiz-priroda-voda-nebo.jpg' alt=''></img>
      </div>
      <ProfileDescription 
        saveProfile={props.saveProfile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile} 
        status={props.status}
        setStatus={props.setStatus}/>
      <ProfilePostsContainer />
    </div>
  );
}