import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg?v=4080_1" />

            {props.message}

            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;