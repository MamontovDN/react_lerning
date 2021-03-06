import Friend from "./Friend/Friend";
import s from "./Friends.module.css"

const Friends = (props) => {

    let friends = props.friends.map(friend => {return <Friend friend={friend}/>})
    return (
            <div className={s.friends}>
                {friends}
            </div>
    )
}

export default Friends;