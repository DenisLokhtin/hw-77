import React from 'react';
import './Post.css'

const Post = ({author, date, text, file}) => {
    const showImg = () => {
        if (file) {
            return  <img className="img" src={"http://localhost:8000/uploads/" + file} alt=""/>
        }
    }

    return (
        <div className="post">
            <p className="postInfo">{author} {date}</p>
            {showImg()}
            <p className="postText">{text}</p>
        </div>
    )
};

export default Post;