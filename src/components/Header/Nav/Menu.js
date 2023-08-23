import React from 'react';
import s from './Nav.module.css'
import cn from "classnames"
import style from "./Nav.module.css";

const Menu = ({open, close}) => {
    return (
        <div className={open ? cn(style.menu, style.active) : style.menu}>
            <h3>MENU</h3>
            <button onClick={close}>close</button>
        </div>
    );
};

export default Menu;