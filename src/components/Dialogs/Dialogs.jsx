import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Message";
import * as React from "react";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let newMessage = React.createRef();
    let me = 1
    let other = 2
    let otherName = props.messagesPage.dialogs.find(x => x.id === other).title
    let myName = props.messagesPage.dialogs.find(x => x.id === me).title
    let dialogItems = props.messagesPage.dialogs.map(dialog => <DialogItem title={dialog.title} id={dialog.id}/>)
    let messageItems = props.messagesPage.messages.map(message => {
        let name;
        let userClass;
        if (message.id === me){
            name = myName
            userClass = "me"
        } else {
            name = otherName
            userClass = "other"
        }
        return <Messages message={message} userClass={userClass} name={name}/>
    })
    let sendMessage = () => {
        let action = addMessageCreator()
        props.dispatch(action)
    }
    let onNewMassageChange = (event) => {
        let action = updateNewMessageTextCreator(event.target.value)
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
            <div className={s.new_message}>
                <textarea onChange={onNewMassageChange}
                          value={props.messagesPage.newMessageText}
                          ref={newMessage}
                          placeholder="Ваше сообщение ..."/>
                <button onClick={sendMessage} className={s.send}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;