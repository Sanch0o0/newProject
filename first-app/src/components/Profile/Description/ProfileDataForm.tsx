import { InjectedFormProps, reduxForm } from 'redux-form';
import { TextInput, createField } from '../../common/FormControls/FormsControl';
import classes from './Description.module.css';
import { ProfileValuesType } from './Description';
import { ProfileType } from '../../../types/types';

type PropsType ={
}

const ProfileDataFormContainer:React.FC<InjectedFormProps<ProfileValuesType, PropsType> & PropsType> = (props) => {

  return (

    <form 
      className={classes.profileMain_description}
      onSubmit={props.handleSubmit}>
      <span className={classes.profileName}>
        Full name: {createField('Full name', 'fullName', [], TextInput)}
      </span>
      <span className={classes.profileText}>
        Looking for a job: {createField('', 'lookingForAjob', [], TextInput, {type: 'checkbox'} )}
      </span>
      <span className={classes.profileText}>About me: {createField('About Me', 'aboutMe', [], TextInput)}</span>
      <span className={classes.profileText}>Description: {createField('Looking for a job desc', 'lookingForAJobDescription', [], TextInput)}</span>
      <button>save</button>
    </form>

  )
}

const ProfileDataForm = reduxForm<ProfileValuesType, PropsType>({
  form: 'edit-profile',
})(ProfileDataFormContainer);

export default ProfileDataForm;