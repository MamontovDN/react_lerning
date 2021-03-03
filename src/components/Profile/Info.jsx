import s from './Info.module.css'

const Info = () => {
    return (
        <div className={s.main}>
            <div className={s.avatar}>
            <img
                src='https://avatarfiles.alphacoders.com/745/7454.jpg'
                alt='sheppard'/>
            </div>
            <div className={s.description}>
                <p className={`${s.item} ${s.name}`}>
                    Mamontov Dmitry
                </p>
                <p className={s.item}>
                    Birthday: Jan 18 1994
                </p>
                <p className={s.item}>
                    City: Saint-Petersburg / Russia
                </p>
                <p className={s.item}>
                    Education: Bachelor
                </p>
                <p className={s.item}>
                    Web Site: <a target="blank" href='http://www.mamontovdn.ru'>http://www.mamontovdn.ru</a>
                </p>
            </div>
        </div>
    )
}

export default Info;