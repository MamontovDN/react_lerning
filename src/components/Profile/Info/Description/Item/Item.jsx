import s from './Item.module.css'

const Item = props => {
    return (
        <p className={s.item}>
            {props.title}: {props.value}
        </p>
    )
}

export default Item;