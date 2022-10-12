import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextCreator} from '../../../Redux/state'


const MyPost = (props) => {



    let PostsElement = props.PostsData.map(p => (<Post message={p.message} like={p.like} />))

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action)
    }
    return (

        <div className={s.lenta}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {PostsElement}
        </div>
    )
}

export default MyPost;