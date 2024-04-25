import { Header } from "./Header";
import { connect } from 'react-redux';
import { logOut } from '../../state/authReducer'
import { AppStateType } from "../../state/reduxStore";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logOut: ()=> void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const HeaderContainer:React.FC<PropsType> = (props) => {

  return (
    <Header isAuth = {props.isAuth} login={props.login} logOut={props.logOut}/>
  );
}

const mapStateToProps = (state: AppStateType) =>{
  return{
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
  }
}


export default connect(mapStateToProps,
  {logOut})
  (HeaderContainer);
