import React from 'react';
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.messageItem}>
            <div><img className={s.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/></div> 
            <div className={s.messageObject}>                
                <div className={s.message}>{props.message}</div>
            </div>
        </div>
    )
}

export default Message;