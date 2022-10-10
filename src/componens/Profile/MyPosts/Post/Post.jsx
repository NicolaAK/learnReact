import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://meragor.com/files/styles/ava_800_800_wm/avatar_avatar_2009_zoi_saldana_nejtiri_105373.jpg' />
            {props.message}
            <div>
                <span>Like {props.like}</span>
            </div>

        </div>
    )
}

export default Post;