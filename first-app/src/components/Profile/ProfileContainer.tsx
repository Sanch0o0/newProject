import { Profile } from './Profile';
import { useEffect } from 'react';
import { setUserProdile, setStatus, savePhoto, saveProfile } from '../../state/profileReducer';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { AppStateType } from '../../state/reduxStore';
import { ProfileType } from '../../types/types';

type MapPropsType = {
  profile: ProfileType
  status: string
  userId: number
  isAuth: boolean
}
type DispatchPropsType = {
  setUserProdile: (id: number) => void
  setStatus: (text: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => void
}

type PathParamsType = {
  router:{
    params:{
      userId: number
    }
  }
}

function withRouter(Component: React.Component) {
  const ComponentWithRouterProp: React.FC<MapPropsType & DispatchPropsType & PathParamsType> = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      //@ts-ignore
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}


const ProfileContainer: React.FC<MapPropsType & DispatchPropsType & PathParamsType> = (props) => {

  let userId = props.router.params.userId || props.userId;

  useEffect(() => {
    if (props.userId !== null) {

      props.setUserProdile(userId);
    }
  }, [userId]);

  if (!props.isAuth) return <Navigate to={'/login'} />;

  return (
    <>
      <Profile
        saveProfile={props.saveProfile}
        savePhoto={props.savePhoto}
        isOwner={!props.router.params.userId}
        profile={props.profile}
        status={props.status}
        setStatus={props.setStatus} />
    </>
  );
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    userId: state.authReducer.id,
    isAuth: state.authReducer.isAuth,
  }
}

export default connect(mapStateToProps, { setUserProdile, setStatus, savePhoto, saveProfile })
//@ts-ignore
(withRouter(ProfileContainer));
