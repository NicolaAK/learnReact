import s from './friend.module.css';



let Friend = (props) => {




    return (
            <div className={s.blockFriends} >
                <div className={s.avaFriends}>
                    <img src='https://a.d-cd.net/1a424f2s-960.jpg' />
                </div>
                <div className={s.nameFriends}>
                    <a>
                        {props.name}
                    </a>
                </div>
            </div>
    )
};

export default Friend