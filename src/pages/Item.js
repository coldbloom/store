import React from 'react';
import {useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Thumbs} from "swiper";
import ProductImagesSlider from "../components/product-images-slider";

import '../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import {productImages1} from "./../components/images/1/index";
import {productImages2} from "./../components/images/2/index";
import {productImages3} from "./../components/images/3/index";
import {productImages4} from "./../components/images/4/index";
import {productImages5} from "./../components/images/5/index";
import {productImages6} from "./../components/images/6/index";
import {productImages7} from "./../components/images/7/index";
import {productImages8} from "./../components/images/8/index";
import {productImages9} from "./../components/images/9/index";
//import {productImages} from `./../components/images/${id}/index`


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
                <ProductImagesSlider images={productImages5}/>
            </div>
        </div>
    );
};

export default Item;