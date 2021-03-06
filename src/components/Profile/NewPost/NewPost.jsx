import s from './NewPost.module.css'
import * as React from "react";

const ProfileMain = () => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };
    return (
        <div>
            <h1>My posts</h1>
            <div>
                <div className={s.text_area_container}>
                    <textarea ref={newPostElement} placeholder="Ваш пост" className={s.text_area}/>
                </div>
                <div className={s.button_container}>
                    <button onClick={ addPost } className={s.button_send}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default ProfileMain;