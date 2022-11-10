import React from 'react';
import './App.css';
import HeaderContainer from './componens/Heeader/HeaderContainer';
import Navbar from './componens/Navbar/Navbar';
import Music from './componens/Music/Music';
import News from './componens/News/News';
import Setting from './componens/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './componens/Users/UsersContainer';
import ProfileContainer from './componens/Profile/ProfileContainer';
import Login from './componens/login/loginHF';
import DialogsContainer from "./componens/Dialogs/DialogsContainer"

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:profileId' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
