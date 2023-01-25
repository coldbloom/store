import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import './Main.scss'

function useHover() {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)

    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)
        return () => {
            ref.current.removeEventListener('mouseenter', enter)
            ref.current.removeEventListener('mouseleave', leave)
        }
    }, [ref])

    return [ref, hovered]
}

const ItemClothing = ({title, id, price}) => {
    const [ref, hovered] = useHover()

    const openItem = () => {

    }

    return (
        <>
            <Link to={`/item/${id}`}>
                <div
                    onClick={() => openItem()}
                    className='m-4 p-2 flex flex-col items-center'
                    ref={ref}
                >
                    <div className='item-img'>
                        {
                            hovered
                                ? <img src={`./clothes/${id}/2.jpg`} alt=""/>
                                : <img src={`./clothes/${id}/1.jpg`} alt=""/>
                        }
                    </div>
                    <p>{title}</p>
                    <p>{price} ₽</p>
                </div>
            </Link>
        </>
    );
};

export default ItemClothing;

