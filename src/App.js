
import './App.css';
import Dialogs from './componens/Dialogs/Dialogs';
import Header from './componens/Heeader/Header';
import Navbar from './componens/Navbar/Navbar';
import Profile from './componens/Profile/Profile';
import Music from './componens/Music/Music';
import News from './componens/News/News';
import Setting from './componens/Setting/Setting';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sidebar={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
