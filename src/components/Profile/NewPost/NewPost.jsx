import s from './NewPost.module.css'
import React from "react";


const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost()
    }
    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextCreator(text)
    }
    return (
        <div>
            <h1>My posts</h1>
            <div>
                <div className={s.text_area_container}>
                    <textarea value={props.newPostText} ref={newPostElement}
                              placeholder="Ваш пост" className={s.text_area}
                              onChange={newPostChange}/>
                </div>
                <div className={s.button_container}>
                    <button onClick={addPost} className={s.button_send}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default NewPost;