import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
    let newMessage = React.createRef();
    let otherName = props.state.dialogs.find(x => x.id !== props.myId).title
    let myName = props.state.dialogs.find(x => x.id === props.myId).title
    let dialogItems = props.state.dialogs.map(dialog => <DialogItem title={dialog.title} id={dialog.id}/>)
    let messageItems = props.state.messages.map(message => {
        let name;
        let userClass;
        if (message.id === props.myId){
            name = myName
            userClass = "me"
        } else {
            name = otherName
            userClass = "other"
        }
        return <Message message={message} userClass={userClass} name={name}/>
    })
    let sendMessage = () => {
        props.sendMessage()
    }
    let onNewMassageChange = (e) => {
        props.newMessage(e.target.value)
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
                          value={props.state.newMessageText}
                          ref={newMessage}
                          placeholder="Ваше сообщение ..."/>
                <button onClick={sendMessage} className={s.send}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;