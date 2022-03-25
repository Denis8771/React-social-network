import React from "react"
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>

        <div className={s.dialogImg}>

       
            <div>
                <img src="https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg?v=4080_1" width='30px' height='30px' />
            </div>
            <NavLink to={path}>{props.name}</NavLink>

        </div>

    </div>
}

export default DialogItem