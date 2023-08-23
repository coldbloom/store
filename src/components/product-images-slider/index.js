import React from 'react';
import PropTypes from "prop-types";
import {SwiperSlide} from "swiper/react";
import {Navigation, Thumbs} from "swiper";
import {Swiper} from "swiper/react";

const ProductImagesSlider = (props) => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                // slidesPerView={1}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}

                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1,
                    },
                }}
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