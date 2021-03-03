import s from './Profile.module.css'
import Top from "./Top";
import Info from "./Info";
import ProfileNewPost from "./NewPost";
import Posts from "./Posts";

const Profile = () => {
    return (
        <div className={s.content}>
            <Top/>
            <Info/>
            <ProfileNewPost/>
            <Posts/>
        </div>
    )
}

export default Profile;