import { ListDialogs } from './ListDialogs';
import { DialogType, actions } from '../../../state/dialogReducer';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import { AppDispatch, AppStateType } from '../../../state/reduxStore';

type mapStateToPropsType = {
  messageText: string,
  dialogsData: Array<DialogType>,
  isAuth: boolean,
}

type mapDispatchToPropsType = {
  changeTextArea: (text: string) => void
  addMessage: () => void
} 

const ListDialogsContainer: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (props) => {
  return (
    <ListDialogs
      messageText={props.messageText}
      dialogsData={props.dialogsData}
      changeTextArea={props.changeTextArea}
      addMessage={props.addMessage}
    />
  )
}

let AuthRedirectComponent: React.FC<mapStateToPropsType & mapDispatchToPropsType> = (props) => {
  if (!props.isAuth) return <Navigate to={'/Login'} />;
  return <ListDialogsContainer {...props} />
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    messageText: state.dialogReducer.newMessageText,
    dialogsData: state.dialogReducer.dialogsData,
    isAuth: state.authReducer.isAuth,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
  return {
    changeTextArea: (text: string) => {
      dispatch(actions.updateMessageActionCreater(text))
    },
    addMessage: () => {
      dispatch(actions.addMessageActionCreater())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);