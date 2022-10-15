import React from 'react';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      PostsData: [
        { id: 1, message: 'Helloy', like: 15, },
        { id: 2, message: 'Helloy, my friends', like: 0, },
      ],
      newPostText: "afc",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Nicolay', },
        { id: 2, name: 'Dima', },
        { id: 3, name: 'Sacha', },
        { id: 4, name: 'Pety', },
        { id: 5, name: 'Jony', },
        { id: 6, name: 'Tarantino', },
      ],
      messagesData: [
        { id: 1, message: 'Hi', },
        { id: 2, message: 'Yes', },
        { id: 3, message: 'No', },
      ],
      newMessageBody: "123",
    },
    sidebar: [
      { id: 1, name: 'Nicolay' },
      { id: 2, name: 'Dima', },
      { id: 3, name: 'Sacha', },
      { id: 4, name: 'Pety', },
      { id: 5, name: 'Jony', },
      { id: 6, name: 'Tarantino', },
    ]
  },
  _callSubscriber() {
    console.log("State")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
}



export default store;
