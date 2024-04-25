import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { initializeApp } from './state/appReducer';
import  ProfileContainer  from './components/Profile/ProfileContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStateType } from './state/reduxStore';
import { ChatPage } from './components/pages/ChatPage/ChatPage';


type PropsType = {
  initialized: boolean
  initializeApp: ()=>void
}

const App: React.FC<PropsType> = (props) => {

  useEffect(()=>{
    props.initializeApp();
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <div className='main-container'>
          <Navbar />
          {(!props.initialized) 
          ? <div>загрузка</div> 
          : <Routes>
              {/* @ts-ignore */}
              <Route path="/" element={<ProfileContainer  />} />
              {/* @ts-ignore */}
              <Route path="/profile/:userId?" element={<ProfileContainer  />} />
              {/* @ts-ignore */}
              <Route path="/friends/*" element={<FriendsContainer />} />
              <Route path="/messages/*" element={<Dialogs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>}
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: AppStateType) =>{
  return {
    initialized: state.appReducer.initialized,
  }
}

export default connect(mapStateToProps ,{initializeApp})(App);

