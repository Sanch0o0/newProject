import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import classes from './LoginForm.module.css';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { TextInput, createField } from '../../common/FormControls/FormsControl';
import { LoginValuesType } from '../Login';

const maxLength30 = maxLengthCreator(30);

type PropsType = {
  captchaURL: string | null
}

const LoginFormContainer: React.FC<InjectedFormProps<LoginValuesType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='email'
          placeholder='login'
          component={TextInput}
          className={classes.inputBox}
          validate={[required, maxLength30]} />
      </div>
      <div>
        <Field
          name='password'
          placeholder='password'
          component={TextInput}
          className={classes.inputBox}
          validate={[required, maxLength30]} />
      </div>
      <div>
        <Field
          name='rememberMe'
          component={'input'}
          type='checkbox' />remember me
      </div>
      {props.captchaURL && <img src={props.captchaURL} />}
      {props.captchaURL && createField('Symbols from kaptcha', 'captcha', [required], TextInput)}
      {props.error && <div className={classes.errorContainer}>
        {props.error}
      </div>}
      <div>
        <button className={classes.submitButton}>log in</button>
      </div>
    </form>
  )
}

export const LoginForm = reduxForm<LoginValuesType, PropsType>({
  form: 'login',
})(LoginFormContainer)