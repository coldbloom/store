import React from 'react';
import {useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Thumbs} from "swiper";
import ProductImagesSlider from "../components/product-images-slider";

import '../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { productImages } from './images'

const Item = () => {
    const {id} = useParams()
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width: '800px',
                height: '700px',
                backgroundColor: '#808080',
                padding: '20px',
            }}>
                <ProductImagesSlider images={productImages}/>
            </div>
        </div>
    );
};

export default Item;