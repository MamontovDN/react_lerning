import s from './Profile.module.css'
import Top from "./Top/Top";
import Info from "./Info/Info";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    let profile = props.profile;
    return (
        <div className={s.content}>
            <Top src={profile.topSrc}/>
            <Info info={profile.info}/>
            <NewPost/>
            <Posts posts={profile.posts}/>
        </div>
    )
}

export default Profile;