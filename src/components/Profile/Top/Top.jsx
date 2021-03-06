import s from './Top.module.css'

const Top = (props) => {
    return (
            <div className={s.fill}>
                <img
                    alt='Top filler'
                    src={props.src}/>
            </div>
    )
}

export default Top;