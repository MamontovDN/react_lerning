const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                picSrc: 'https://image.winudf.com/v2/image1/aW8uY3NvbGFuYW0ud2hhdHNhcHAuc3RpY2tlcnMucmlja21vcnR5X2ljb25fMTU1MTU3OTIzN18wNjg/icon.png?w=&fakeurl=1',
                like_amount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.message;
            return state
        default: return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, message: text})

export default profileReducer