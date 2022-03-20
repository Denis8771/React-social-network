import React from "react"
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: "Dimon" },
        { id: 3, name: "Andrew" },
        { id: 4, name: "Andrew" },
        { id: 5, name: "Andrew" },
        { id: 5, name: "Andrew" },
    ];

    let messages = [
        { id: 1, message: "hi" },
        { id: 2, message: "h2i" },
        { id: 3, message: "hi3" },
        { id: 4, message: "h4i" },
        { id: 5, message: "hi5" },
    ];

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;