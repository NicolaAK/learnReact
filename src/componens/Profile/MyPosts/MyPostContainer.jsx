import React from 'react';
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer'
import MyPost from './MyPost';

let mapStateToProps = (state) => {
    return {
        PostsData: state.profilePage.PostsData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action)
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;