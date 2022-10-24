import React from 'react';
import './App.css';
import HeaderContainer from './componens/Heeader/HeaderContainer';
import Navbar from './componens/Navbar/Navbar';
import Music from './componens/Music/Music';
import News from './componens/News/News';
import Setting from './componens/Setting/Setting';
import DialogsContainer from "./componens/Dialogs/DialogsContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './componens/Users/UsersContainer';
import ProfileContainer from './componens/Profile/ProfileContainer';

const App = (props) => {
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
