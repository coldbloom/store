import React from 'react';
import {Link} from "react-router-dom";
import {SlBasket} from 'react-icons/sl'

const Header = () => {
    return (
        <div className='flex flex-row items-center'>
            <Link to={"/"}>
                <h1>LOGO</h1>
            </Link>
            <Link to={"/cart"}>
                <SlBasket className='ml-6 m-1'/>
            </Link>
        </div>
    );
};

export default Header;