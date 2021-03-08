import s from './NewPost.module.css'
import * as React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";



const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let action = addPostCreator()
        props.dispatch(action)
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action)
    }
    return (
        <div>
            <h1>My posts</h1>
            <div>
                <div className={s.text_area_container}>
                    <textarea value={props.newPostText} ref={newPostElement}
                              placeholder="Ваш пост" className={s.text_area}
                              onChange={onPostChange}/>
                </div>
                <div className={s.button_container}>
                    <button onClick={addPost} className={s.button_send}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default NewPost;