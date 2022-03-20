import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // debugger;

    let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It\'s my fir56657st post", likesCount: 100 },
        { id: 3, message: "It\'s my fir4tt4st post", likesCount: 1050 },
        { id: 4, message: "It\'s my fgirst post", likesCount: 0 }
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;