const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                text: state.newMessageText,
                id: 1,
                avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg"
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state;
        default: return state
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: text})

export default dialogsReducer