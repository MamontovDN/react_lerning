import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.title}</NavLink>
        </div>
    )
}

export default DialogItem;