const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
        { message: 'Hi', },
        { message: 'Yes', },
        { message: 'No', },
      ],
      newSubmitText: "123",
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

  submit() {

    let newSubmit = {
      message: this._state.dialogsPage.newSubmitText,
    };
    this._state.dialogsPage.messagesData.push(newSubmit);
    this._state.dialogsPage.newSubmitText = '';
    this._callSubscriber(this._state);
  },
  updateSubmitText(newSubmit) {
    this._state.dialogsPage.newSubmitText = newSubmit;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.PostsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default store;
