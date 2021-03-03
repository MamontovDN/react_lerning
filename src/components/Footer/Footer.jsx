import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={`${s.item} ${s.index}`}>
                <a href="http://#/">На главную</a>
            </div>
            <div className={s.item}>
                <a href="http://#/">Контакты</a>
            </div>
            <div className={s.item}>
                <a href="http://#/">Технологии</a>
            </div>

        </footer>
    );
}

export default Footer;