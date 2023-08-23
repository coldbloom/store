import React from 'react';

const Cart = () => {

    const items = [
        '111',
        '222',
        '333',
        '444',
        '555',
        '666',
        '777',
        '888',
        '999',
        '101',
        '110',
        '112',
        '113',
        '113',
        '114',
        '115',
        '116',
        '117',
        '118',
        '119',
        '110',
        '111',
        '1116',
        '1117',
        '1118',
        '1119',
        '1120',
        '1121',
        '1122',
        '1123',
        '1124',
        '1125',
        '1126',
        '1127',
    ]

    return (
        <div className='customSelectWrapper'>
            <h1>Корзина</h1>
            <div className='customDropDown'>
                {items.map((item, i) => {
                    return (
                        <div>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Cart;