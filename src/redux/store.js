import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        navBarPage: {
            friends: [
                {
                    avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg",
                    name: "Dmitry",
                },
                {
                    avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg",
                    name: "Tanya",
                },
                {
                    avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg",
                    name: "Danya",
                },
                {
                    avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg",
                    name: "Artem",
                },
                {
                    avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg",
                    name: "Oleg",
                },
                {
                    avaSrc: "https://img.favpng.com/7/7/2/vector-graphics-computer-icons-stock-photography-image-avatar-png-favpng-17iDDER7mFLA1by72yaK2Cfbz.jpg",
                    name: "Sasha",
                },

            ]
        }
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    get getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // action = {type: 'ADD-POST' } or {type: 'UPDATE-NEW-POST-TEXT', message: 'text'}
        this.getState.profile = profileReducer(this.getState.profilePage, action)
        this.getState.messagesPage = dialogsReducer(this.getState.dialogsPage, action)
        this.getState.navBarPage = navBarReducer(this.getState.navBarPage, action)
        this._callSubscriber(this.getState)
    },
}

window.store = store
export default store;