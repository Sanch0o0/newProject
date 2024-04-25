import { connect } from 'react-redux';
import classes from './Login.module.css';
import { LoginForm } from './LoginForm/LoginForm';
import { logIn } from'../../state/authReducer';
import { Navigate } from "react-router-dom";
import { AppStateType } from '../../state/reduxStore';

type MapStateToPropsType = {
  captchaURL: string | null
  isAuth: boolean
}

type MapDispatchToPropsType = {
  logIn: (email: string, password: string, rememberMe: boolean, captcha: string | null)=> void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export type LoginValuesType = {
  email: string
  password: string 
  rememberMe: boolean
  captcha: string
}

const Login: React.FC<PropsType> = (props) => {

  const onSubmitLogin = (formData: any) => {
    let {email, password, rememberMe, captcha} = formData;
    props.logIn(email, password, rememberMe, captcha);
  }

  if(props.isAuth)  return <Navigate to={'/profile'}/>;

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginBox}>
        <h1 className={classes.loginHeader}>Login</h1>

        <LoginForm onSubmit={onSubmitLogin} captchaURL={props.captchaURL}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType =>{
  return{
    captchaURL: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
  }
}

export default connect
  (mapStateToProps, {logIn})
  //@ts-ignore
  (Login);
