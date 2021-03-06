import s from './Info.module.css'
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const Info = (props) => {
    let info = props.info
    return (
        <div className={s.main}>
            <Avatar src={info.srcAvatar}/>
            <Description name={info.name} description={info.description}/>
        </div>
    )
}

export default Info;