import { ProfileType } from '../../../types/types';
import classes from './Description.module.css';

type PropsType = {
  profile: ProfileType
}

export const ProfileData: React.FC<PropsType> = (props) => {

  return (

    <div className={classes.profileMain_description}>
      <span className={classes.profileName}>{props.profile.fullName}</span>
      <span className={classes.profileText}>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</span>
      <span className={classes.profileText}>About me: {props.profile.aboutMe || 'no data'}</span>
      <span className={classes.profileText}>Web Site: {props.profile.contacts.facebook || 'no data'}</span>
    </div>

  )
}