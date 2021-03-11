import s from './Navbar.module.css'
import NavItem from "./NavItem/NavItem";
import Friends from "./Freinds/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <NavItem to={'/profile/'} title={'Profile'} />
            <NavItem to={'/dialogs/'} title={'Messages'} />
            <NavItem to={'/news/'} title={'News'} />
            <NavItem to={'/music/'} title={'Music'} />
            <NavItem to={'/settings/'} title={'Settings'} />
            <Friends friends={props.navBarPage.friends}/>
        </nav>
    )
}

export default Navbar;