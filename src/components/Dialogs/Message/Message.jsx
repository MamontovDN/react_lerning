import s from './Message.module.css'

const Message = props => {
    let who = props.userClass === 'me' ? s.me : s.other
    return (
        <div className={`${s.message} ${who}`}>
            <div className={s.avatar}>
                <a href="#">
                    <img src={props.message.avaSrc}
                         alt="avatar"/>
                </a>
                <a href={"#"} className={s.name}><strong>{props.name}</strong></a>
            </div>
            <div className={s.textBox}>
                <p className={s.text}>{props.message.text}</p>
            </div>
        </div>
    )
}

export default Message;