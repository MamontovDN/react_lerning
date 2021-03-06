import s from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.to} activeClassName={s.active}>{props.title}</NavLink>
        </div>
    )
}

export default NavItem;