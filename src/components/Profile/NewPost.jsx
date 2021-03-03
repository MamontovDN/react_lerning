import s from './NewPost.module.css'

const ProfileMain = () => {
    return (
        <div className={s.new_post}>
            <h1>My posts</h1>
            <div>
                <div className={s.text_area_container}>
                    <textarea placeholder="Ваш пост" className={s.text_area}/>
                </div>
                <div className={s.button_container}>
                    <button className={s.button_send}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default ProfileMain;