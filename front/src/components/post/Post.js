import React from 'react';
import './Post.css'

const Post = ({author, date, text}) => (
    <div className="post">
        <p className="postInfo">{author} {date}</p>
        <p className="postText">{text}</p>
    </div>
);

export default Post;