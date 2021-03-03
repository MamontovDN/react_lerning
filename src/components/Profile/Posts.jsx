import s from './Posts.module.css'
import Post from "./Post";

const Posts = () => {
    return (
        <div className={s.posts}>
            <Post message={`The best social network`} like_amount={20}/>
            <Post message="Hello" like_amount={15}/>
            <Post message="Hi my friend" like_amount={2}/>
            <Post message="It's my first post" like_amount={1}/>
        </div>
    )
}

export default Posts;