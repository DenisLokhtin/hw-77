import React from 'react';
import './Post.css'

const Post = ({author, date, text}) => (
    <div className="post">
        <p className="postInfo">{author} {date}</p>
        <img className="img" src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
        <p className="postText">{text}</p>
    </div>
);

export default Post;