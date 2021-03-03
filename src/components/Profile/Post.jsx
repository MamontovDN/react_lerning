import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={`${s.item} ${s.clearfix}`}>
            <img
                src="https://image.winudf.com/v2/image1/aW8uY3NvbGFuYW0ud2hhdHNhcHAuc3RpY2tlcnMucmlja21vcnR5X2ljb25fMTU1MTU3OTIzN18wNjg/icon.png?w=&fakeurl=1"
                alt="rick"/>
            <div className={s.post}>
                <p>
                    {props.message}
                </p>
                <div className={s.like}>Like <span>{props.like_amount}</span></div>
            </div>
        </div>
    )
}

export default Post;