import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={`${s.item} ${s.clearfix}`}>
            <img
                src={props.post.picSrc}
                alt="rick"/>
            <div className={s.post}>
                <p>
                    {props.post.message}
                </p>
                <div className={s.like}>Like <span>{props.post.like_amount}</span></div>
            </div>
        </div>
    )
}

export default Post;