import React from 'react';
import './inputForm.css'

const InputForm = (props) => (
    <div className="forms">
        <input
            className="authorForm"
            type="text"
            onChange={(e) => props.setAuthor(e.target.value)}
            value={props.author}
            placeholder="author"
        />
        <input
            className="textForm"
            type="text"
            onChange={(e) => props.setText(e.target.value)}
            value={props.text}
            placeholder="text"
            required={true}
        />
        <input
            className="fileForm"
            type="file"
            onChange={props.setImage}
        />
        <button onClick={props.add} className="sendBtn">Send</button>
    </div>
);

export default InputForm;