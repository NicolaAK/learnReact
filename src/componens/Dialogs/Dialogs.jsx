import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let messagesElements = state.messagesData.map(m => (<Message message={m.message} key={m.id} />));
    let dialogsElements = state.dialogsData.map(d => (<DialogItem name={d.name} key={d.id} id={d.id} />));
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    if (!props.isAuth) return <Navigate to={"/login"} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;