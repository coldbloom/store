import React from 'react';
import PropTypes from "prop-types";
import {SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

const ProductImagesSlider = (props) => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
            >
                {
                    props.images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item} alt="Slider Images"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider;