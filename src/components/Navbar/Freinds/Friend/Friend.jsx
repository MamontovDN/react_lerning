import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <a href={"#"} className={s.friendItem}>
                <div className={s.avatar}>
                    <img
                        src={props.friend.avaSrc}
                        alt={"avatar"}/>
                </div>
                <div className={s.name}>
                    {props.friend.name}
                </div>
            </a>
        </div>
    )
}

export default Friend;