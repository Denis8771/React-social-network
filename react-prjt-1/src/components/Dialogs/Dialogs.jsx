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
      return  <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimon1' id='1' />
                <DialogItem name='Dimon2' id='2' />
                <DialogItem name='Dimon3' id='3' />
                <DialogItem name='Dimon4' id='4' />
                <DialogItem name='Dimon5' id='5' />
            </div>

            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Yo' />
            </div>
        </div>
    )
}

export default Dialogs;