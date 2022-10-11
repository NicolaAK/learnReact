import './index.css';
import reportWebVitals from './reportWebVitals';
import state from '../src/Redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost,submit, updateNewPostText, updateSubmitText, subscribe} from'./Redux/state.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

  root.render(
    
    <React.StrictMode>
      
      <App state ={state} addPost={addPost} submit={submit} updateNewPostText={updateNewPostText} updateSubmitText={updateSubmitText}/>
      
    </React.StrictMode>
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
