import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import './Main.scss'

function useHover() {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)

    const enter = () => {
        setHovered(true)
        console.log('enter')
    }
    const leave = () => setHovered(false)

    useEffect(() => {
        const instance = ref.current;
        if (ref.current) {
            //ref?.current.someSetupMethod();
            ref?.current.addEventListener('mouseenter', enter)
            ref?.current.addEventListener('mouseleave', leave)
        }
        // return () => {
        //     ref?.current.removeEventListener('mouseenter', enter)
        //     ref?.current.removeEventListener('mouseleave', leave)
        //     //ref?.someCleanupMethod();
        // }
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
                    ref={ref ? ref : null}
                >
                    <div className='item-img'>
                        {ref &&
                            (
                                hovered
                                ? <img src={`./clothes/${id}/2.jpg`} alt=""/>
                                : <img src={`./clothes/${id}/1.jpg`} alt=""/>
                            )}
                    </div>
                    <p>{title}</p>
                    <p>{price} ₽</p>
                </div>
            </Link>
        </>
    );
};

export default ItemClothing;

