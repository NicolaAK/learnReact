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

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessage);
    }
    if (!props.isAuth) return <Navigate to={"/login"} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm newMessageText={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    const { register, handleSubmit, reset, formState: { errors, isValid }, } = useForm({ mode: "onBlue" });
    const onSubmit = data => {
        reset()
        props.newMessageText(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("newMessage", { required: "Message is requier field!", })}
                    placeholder="message" />
            </div>
            {errors?.newMessage && (
                <div style={{ color: "red" }}>{errors.newMessage.message}</div>
            )}
            <input type="submit" disabled={!isValid} />
        </form>
    );
}

export default Dialogs;