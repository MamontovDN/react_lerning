import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
    let onSendMessage = () => {
        let action = addMessageCreator()
        props.store.dispatch(action)
    }
    let onNewMassageChange = (text) => {
        let action = updateNewMessageTextCreator(text)
        props.store.dispatch(action)
    }
    return <Dialogs state={state}
                    sendMessage={onSendMessage}
                    newMessage={onNewMassageChange}
                    myId={1}/>
}

export default DialogsContainer;