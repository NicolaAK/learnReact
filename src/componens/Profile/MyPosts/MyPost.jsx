import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';


const MyPost = (props) => {



    let PostsElement = props.PostsData.map(p => (<Post message={p.message} like={p.like} />))

    let newPostElement = React.createRef();

    let addPost = () => {
       
        let text = newPostElement.current.value;
        props.addPost(text)
       
    }
    return (

        <div className={s.lenta}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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