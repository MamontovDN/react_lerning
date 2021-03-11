import s from './Profile.module.css'
import Top from "./Top/Top";
import Info from "./Info/Info";
import Posts from "./Posts/Posts";
import NewPostContainer from "./NewPost/NewPostContatiner";

const Profile = (props) => {
    let state = props.store.getState().profilePage;
    return (
        <div className={s.content}>
            <Top src={state.topSrc}/>
            <Info info={state.info}/>
            <NewPostContainer store={props.store}/>
            <Posts posts={state.posts}/>
        </div>
    )
}

export default Profile;