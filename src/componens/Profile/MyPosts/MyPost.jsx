import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { useForm } from "react-hook-form";

const MyPost = (props) => {

    let PostsElement = props.PostsData.map(p => (<Post message={p.message} like={p.like} key={p.id} />))
    let onAddPost = (value) => {
        props.addPost(value.newPost);
    }
    return (
        <div className={s.lenta}>
            <div>
                <AddPostForm newPostText={onAddPost} />
            </div>
            {PostsElement}
        </div>
    )
}

const AddPostForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors, isValid }, } = useForm({ mode: "onBlue" });
    const onSubmit = data => {
        console.log(data)
        reset()
        props.newPostText(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("newPost", {
                    required: "Post is requier field!",
                    maxLength: {
                        value: 30,
                        message: "Max 30 simbol"
                    }
                })}
                    placeholder="posts" />
            </div>
            {errors?.newPost && (
                <div style={{ color: "red" }}>{errors?.newPost?.message}</div>
            )}
            <input type="submit" disabled={!isValid} />
        </form>
    );
}


export default MyPost;