import React, {useEffect} from "react";
import InputForm from "./components/inputForm/inputForm";
import Post from "./components/post/Post";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {authorChange, postsSet, textChange, imageSet} from "./store/action";
import './App.css';

function App() {
    const url = 'http://localhost:8000/message';

    const dispatch = useDispatch();
    const message = useSelector(state => state.post.message);
    const author = useSelector(state => state.post.author);
    const posts = useSelector(state => state.posts);
    const image = useSelector(state => state.image);
    const post = useSelector(state => state.post);

    let interval = null;

    const getData = async () => {
        try {
            let data = null
            if (posts.length > 0) {
                data = await axios.get(url + '?datetime=' + posts[posts.length - 1]['datetime'])
            } else {
                data = await axios.get(url)
            }
            if (data.data.length > 0) {
                dispatch(postsSet(data.data));
                clearInterval(interval)
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        interval = setInterval(async () => {
            await getData()
        }, 2000);
    }, [posts]);

    const imageChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        dispatch(imageSet(name, file));
    };

    const addPost = async (event) => {
        try {
            const data = {
                ...post
            };
            if (author === '') {
                data.author = 'Anonymous'
            }
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
            await axios.post(url, formData);
            dispatch(textChange(''));
        } catch (e) {
            console.log(e.response.data);
            alert(e.response.data.error);
        }
    }

    return (
        <div className="container">
            <div className="inner-container">
                <h2>IMAGE BOARD</h2>
                <InputForm
                    setText={(value) => dispatch(textChange(value))}
                    setAuthor={(value) => dispatch(authorChange(value))}
                    add={() => addPost()}
                    text={message}
                    author={author}
                    setImage={imageChangeHandler}
                />
                <div className="posts">
                    {posts.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                author={post.author}
                                date={post.datetime}
                                text={post.message}
                                file={post.file}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
