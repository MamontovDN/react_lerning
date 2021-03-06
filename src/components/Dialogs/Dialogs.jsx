import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs;