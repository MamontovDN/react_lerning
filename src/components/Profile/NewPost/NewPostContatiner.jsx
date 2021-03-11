import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import NewPost from "./NewPost";


const NewPostContainer = (props) => {
    let newPostText = props.store.getState().profilePage.newPostText
    let onAddPost = () => {
        let action = addPostCreator()
        props.store.dispatch(action)
    }
    let onUpdateNewPostTextCreator = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action)
    }
    return <NewPost addPost={onAddPost}
                    updateNewPostTextCreator={onUpdateNewPostTextCreator}
                    newPostText={newPostText}
    />
}

export default NewPostContainer;