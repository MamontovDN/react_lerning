import s from './Description.module.css'
import Item from "./Item/Item";

const Description = props => {
    let items = props.description.map(description => {
        return description.title === "Web Site" ?
            <Item title={description.title}
                  value={
                      <a target="blank"
                         href={description.value}>{description.value}
                      </a>}
            /> :
            <Item title={description.title} value={description.value}/>
    })
    return (
        <div className={s.description}>
            <h1 className={`${s.name}`}>
                {props.name}
            </h1>
            {items}

        </div>
    )
}

export default Description;