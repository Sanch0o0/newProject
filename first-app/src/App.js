import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Navbar } from './components/Navbar/Navbar';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FriendsContainer } from './components/Friends/FriendsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='main-container'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile  />} />
            <Route path="/profile/*" element={<Profile  />} />
            <Route path="/friends/*" element={<FriendsContainer />} />
            <Route path="/messages/*" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
