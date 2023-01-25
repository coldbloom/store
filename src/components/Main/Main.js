import React from 'react';
import ItemClothing from "./ItemClothing";
import './Main.scss'

const items = [
    {
        id: '1',
        title: 'худи ZNY LOGO',
        price: '10 000',
    },
    {
        id: '2',
        title: 'футболка ZNY LOGO',
        price: '10 000',
    },
    {
        id: '3',
        title: 'футболка ZNY LOGO',
        price: '10 000',
    },
    {
        id: '4',
        title: 'брюки спортивные ZNY PVC LOGO',
        price: '10 000',
    },
    {
        id: '5',
        title: 'свитер ZNY MONOGRAM',
        price: '10 000',
    },
    {
        id: '6',
        title: 'футболка ZNY METAl LOGO',
        price: '10 000',
    },
    {
        id: '7',
        title: 'худи ZNY MONOGRAM',
        price: '10 000',
    },
    {
        id: '8',
        title: 'худи ZNY STAY OTHER',
        price: '10 000',
    },
    {
        id: '9',
        title: 'худи ZNY MEME',
        price: '10 000',
    },
]

const Main = () => {
    return (
        <div className='wrapper'>
            {items.map(item => (
                <ItemClothing key={item.id} {...item}/>
            ))}
        </div>
    );
};

export default Main;