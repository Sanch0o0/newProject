import {ListDialogs} from './ListDialogs';
import React from 'react'; 
import { addMessageActionCreater, updateMessageActionCreater } from '../../../state/dialogReducer';
import {connect} from 'react-redux';

// export function ListDialogsContainer(props) {

//   const changeTextArea  = (text) => {
//     props.dispatch(updateMessageActionCreater(text));
//   }

//   const addMessage =(e)=>{
//     props.dispatch(addMessageActionCreater())
//   }

//   return (
//     <ListDialogs
//     changeTextArea={changeTextArea}
//     addMessage={addMessage}
//     messageText={props.messageText}
//     dialogsData={props.dialogsData}
//     />
//   )
// }

const mapStateToProps=(state)=>{
  return{
    messageText: state.dialogReducer.newMessageText,
    dialogsData: state.dialogReducer.dialogsData
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeTextArea: (text) => {
      dispatch(updateMessageActionCreater(text));
    },
     addMessage: ()=>{
      dispatch(addMessageActionCreater())
    }
  }
}

export const ListDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(ListDialogs);