import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let messagesElements = state.messagesData.map(m => (<Message message={m.message} />));
    let dialogsElements = state.dialogsData.map(d => (<DialogItem name={d.name} id={d.id} />));
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

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