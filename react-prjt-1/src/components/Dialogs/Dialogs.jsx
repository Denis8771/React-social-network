import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avaImg={d.avaImg} />);
    let messageElements = props.state.messages.map(m => <Message message={m.message} />);

    let newPostElement = React.createRef();
    
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>

            <div>
                <div>                    
                    <textarea className={s.textarea} ref={newPostElement} placeholder="Напишите сообщение..."></textarea>
                </div>
                <div>
                    <button onClick={ addPost } className={s.button}>Отправить</button>
                </div>
            </div>



        </div>
    )
}

export default Dialogs;