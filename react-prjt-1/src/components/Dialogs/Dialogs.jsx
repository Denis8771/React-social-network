import React from "react"
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    dimon
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Andrey2
                </div>
                <div className={s.dialog}>
                    Andrey3
                </div>
                <div className={s.dialog}>
                    Andrey4
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>

            </div>


        </div>
    )
}

export default Dialogs;