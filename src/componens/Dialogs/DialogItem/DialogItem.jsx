import React from 'react';
import s from "./DialogItem.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"/>
            <NavLink  className={s.dialogItem} to={path}>{props.img}{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;