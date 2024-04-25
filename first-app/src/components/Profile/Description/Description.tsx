import classes from './Description.module.css';

import catIMG from '../../../assets/catIMG.webp';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import { ProfileData } from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';
import { ProfileType } from '../../../types/types';

type PropsType = {
  savePhoto: (photo: any) => void
  saveProfile: (formData: any)=>void
  isOwner: boolean
  profile: ProfileType
  status: string 
  setStatus: (text: string)=>void
}

export type ProfileValuesType = {
  fullName: string | null
  lookingForAjob: boolean 
  aboutMe: string | null
  lookingForAJobDescription: string | null
}


export const ProfileDescription: React.FC<PropsType> = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData: ProfileValuesType) => {
    props.saveProfile(formData);
    setIsEditing(!isEditing);
  }

  if (!props.profile) return (<div>загрузка..</div>)

  return (
    <div className={classes.profileDescription}>
      <div className={classes.profilePhotoContainer}>
        <div className={classes.profilePhoto}>
          <img src={props.profile.photos.small || catIMG} alt=''></img>
        </div>
        {props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
      </div>
      <div className={classes.profileMain_description}>
        <ProfileStatus status={props.status} setStatus={props.setStatus} />
        {!isEditing
          ? <ProfileData  {...props} />
          : <ProfileDataForm initialValues={props.profile} {...props} onSubmit={onSubmit}/>}
      </div>
      {props.isOwner && !isEditing && <button onClick={() => setIsEditing(!isEditing)}>
        редактировать
      </button>}
    </div>
  )
}