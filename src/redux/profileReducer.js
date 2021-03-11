const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    newPostText: "",
    topSrc: "https://www.10wallpaper.com/wallpaper/1366x768/1510/wavy_lines_backgrounds_glitter-Design_HD_Wallpaper_1366x768.jpg",
    info: {
        srcAvatar: "https://avatarfiles.alphacoders.com/745/7454.jpg",
        name: "Mamontov Dmitriy",
        description: [
            {
                title: 'Birthday',
                value: '18.01.1994'
            },
            {
                title: 'City',
                value: 'Saint-Petersburg / Russia'
            },
            {
                title: 'Education',
                value: 'Bachelor'
            },
            {
                title: 'Web Site',
                value: 'http://www.mamontovdn.ru'
            },

        ],
    },
    posts: [
        {
            message: 'The best social network',
            picSrc: 'https://image.winudf.com/v2/image1/aW8uY3NvbGFuYW0ud2hhdHNhcHAuc3RpY2tlcnMucmlja21vcnR5X2ljb25fMTU1MTU3OTIzN18wNjg/icon.png?w=&fakeurl=1',
            like_amount: 20
        },
        {
            message: 'Hello',
            picSrc: 'https://image.winudf.com/v2/image1/aW8uY3NvbGFuYW0ud2hhdHNhcHAuc3RpY2tlcnMucmlja21vcnR5X2ljb25fMTU1MTU3OTIzN18wNjg/icon.png?w=&fakeurl=1',
            like_amount: 19
        },
        {
            message: 'Hi my friend',
            picSrc: 'https://image.winudf.com/v2/image1/aW8uY3NvbGFuYW0ud2hhdHNhcHAuc3RpY2tlcnMucmlja21vcnR5X2ljb25fMTU1MTU3OTIzN18wNjg/icon.png?w=&fakeurl=1',
            like_amount: 18
        },
        {
            message: 'It\'s my first post',
            picSrc: 'https://image.winudf.com/v2/image1/aW8uY3NvbGFuYW0ud2hhdHNhcHAuc3RpY2tlcnMucmlja21vcnR5X2ljb25fMTU1MTU3OTIzN18wNjg/icon.png?w=&fakeurl=1',
            like_amount: 123
        },
    ]
}

const profileReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, message: text})

export default profileReducer