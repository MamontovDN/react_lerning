import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                alt='some text'
                src="https://ditech.es/wp-content/uploads/2018/06/logo-ditech-servicios-tecnologicos-ingenieria-outsourcing-1.png"/>
        </header>
    )
}

export default Header;