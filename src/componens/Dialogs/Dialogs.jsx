import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
    let addNewMessage = () => {
        alert("andj")
    }
    if (!props.isAuth) return <Navigate to={"/login"} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>submit</button>
                </div> */}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    const { register,
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
        props.addNewMessage()
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("message", {})}
                    placeholder="message" />
            </div>
            <input type="submit" />
        </form>
    );
}

export default Dialogs;