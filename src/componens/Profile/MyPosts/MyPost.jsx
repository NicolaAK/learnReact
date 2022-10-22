import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {
    let PostsElement = props.PostsData.map(p => (<Post message={p.message} like={p.like} key={p.id} />))
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={s.lenta}>
            <div>My posts</div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {PostsElement}
        </div>
    )
}

export default MyPost;