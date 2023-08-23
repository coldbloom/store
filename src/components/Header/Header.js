import React from 'react';
import {Link} from "react-router-dom";
import { SlBasket } from 'react-icons/sl';
import { SlUser } from 'react-icons/sl';
import { SlCallIn } from 'react-icons/sl';
import { BiBasket } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { BiPhone } from 'react-icons/bi'
import s from './Header.module.scss'
import logo from '../../static/logo.svg'
import Burger from "../Burger/Burger";
import Menu from "./Nav/Menu";

const Header = () => {
    const [openMenu, setOpenMenu] = React.useState(false)

    const close = () => {
        setOpenMenu(false)
    }

    React.useEffect(() => {
        // Прописываем overflow: hidden для body
        if (openMenu) {
            document.body.style.overflow = 'hidden';
            console.log('hidden')
        }
        // Функция очистки
        return () => {
            // Возвращаем overflow: auto для body при размонтировании компонента
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className={s.burger} onClick={() => setOpenMenu(true)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div>
                <Link to={"/"}>
                    logo
                </Link>
            </div>

            <div className='flex row'>
                <BiPhone size={24}/>
                <BiUser size={24}/>
                <BiBasket size={24}/>
            </div>

            {/*<Link to={"/"}>*/}
            {/*    <img src={logo} alt="logo" className={s.header__logo}/>*/}
            {/*</Link>*/}

            <Menu open={openMenu} close={close}/>
            {/*<div className='flex row items-center lg:hidden'>*/}
            {/*    <Link to={"/cart"}>*/}
            {/*        <SlBasket className='ml-2 m-1'/>*/}
            {/*    </Link>*/}
            {/*    <Burger />*/}
            {/*</div>*/}
        </div>
    );
};

export default Header;