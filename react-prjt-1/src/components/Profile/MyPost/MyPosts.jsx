import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <buttom>Add post</buttom>
        </div>


        <div className={s.posts}>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    </div>
}

export default MyPosts;