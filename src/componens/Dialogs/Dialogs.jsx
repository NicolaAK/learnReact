import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messagesElements = props.state.messagesData.map(m => (<Message message={m.message} />));

    let dialogsElements = props.state.dialogsData.map(d => (<DialogItem name={d.name} id={d.id} />));

    let newSubmitElement = React.createRef();

    let submit = () => {
        props.dispatch()
    }
    let onMessageChange = () => {
        let text = newSubmitElement.current.value;
        let action = 
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newSubmitElement} value={props.newSubmitText}></textarea>
                </div>
                <div>
                    <button onClick={submit}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;