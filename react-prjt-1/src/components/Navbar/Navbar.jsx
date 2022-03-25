import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to="/friends" className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>

                <div className={s.navbarFriends}>
                    <div className={s.avaName}>
                        <div>{'ttt'}</div>
                        <img src="https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg?v=4080_1" width='30px' height='30px' />
                    </div>

                    <div className={s.avaName}>
                        <div>{'ttt'}</div>
                        <img src="https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg?v=4080_1" width='30px' height='30px' />
                    </div>

                    <div className={s.avaName}>
                        <div>{'ttt'}</div>
                        <img src="https://focus.ua/static/storage/thumbs/920x465/3/4a/4678f1be-22e728855eac963a5f1b12e68caee4a3.jpg?v=4080_1" width='30px' height='30px' />
                    </div>
        
                </div>

            </div>
        </nav>
    )
}

export default Navbar;   