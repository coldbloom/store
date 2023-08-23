import React from 'react';
import './Burger.scss'

const Burger = () => {

    const [burger_class, setBurgerClass] = React.useState('line unClicked')
    const [isMenuClicked, setMenuClicked] = React.useState(false)

    const updateMenu = () => {
        if (isMenuClicked === true) {
            setBurgerClass('line clicked')
        } else {
            setBurgerClass('line unClicked')
        }
        setMenuClicked(!isMenuClicked)
    }

    return (
        <div className=''>
            <div className='burger-menu' onClick={updateMenu}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
        </div>
    );
};

export default Burger;