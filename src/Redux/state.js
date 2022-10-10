import { rerenderEntireTree } from "../render";


let state = {
  profilePage: {
    PostsData: [
      { id: 1, message: 'Helloy', like: 15, },
      { id: 2, message: 'Helloy, my friends', like: 0, },
    ],
    newPostText: "122354",
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
  },
  sidebar: [
    { id: 1, name: 'Nicolay' },
    { id: 2, name: 'Dima', },
    { id: 3, name: 'Sacha', },
    { id: 4, name: 'Pety', },
    { id: 5, name: 'Jony', },
    { id: 6, name: 'Tarantino', },
  ]
}

export let addPost = () => {

  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    like: 0,
  };
  state.profilePage.PostsData.push(newPost);
  state.profilePage.newPostText= '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;