const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, title: 'Dmitriy'},
        {id: 2, title: 'Tanya'},
        {id: 3, title: 'Danya'},
        {id: 4, title: 'Artem'},
        {id: 5, title: 'Oleg'},
        {id: 6, title: 'Evgeniy'},
        {id: 7, title: 'Sasha'}
    ],
    messages: [
        {
            text: "Hi!!!fdshjaflkdsfl;kasdhfjsdahflkjashdkfjdsakjfhkdshalfkjsdkafhjakshdfkjahsdlfkadskjfhgk fasdohfiahs a fkjladshgk ah kjahsskdlhag k kajghakds hka jgkjgdjhsk ak haksd ha kjga hlka hgak l kasdhg alskh kashgdkajshglksadhgklas hk ahskdglksah ak end!!!",
            id: 2,
            avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg"
        },
        {
            text: "I!", id: 1,
            avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg"
        },
        {
            text: "He!", id: 2,
            avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg"
        },
        {
            text: "I!", id: 1,
            avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg"
        },
    ],
    newMessageText: "",
}

const dialogsReducer = (state=initialState, action) => {
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
        default:
            return state
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: text})

export default dialogsReducer