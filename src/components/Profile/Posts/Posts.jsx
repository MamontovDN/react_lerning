import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let postItems = props.posts.map(post => <Post post={post}/>)
    return (
        <div className={s.posts}>
            {postItems}
        </div>
    )
}

export default Posts;