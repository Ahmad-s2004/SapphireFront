import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./Carousel3.css";

const Carousel3 = () => {
    return (
        <div>
            <div className="text-center fs-4 heading fw-600 mt-4 mb-3">SHOP BY CATEGORY</div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    1100: { slidesPerView: 4 },
                    724: { slidesPerView: 3 },
                    500: { slidesPerView: 2 },
                    200: { slidesPerView: 2 },
                }}
            >
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/unstiched.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Unstiched</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/men.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Men</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/women.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 mt-1 fw-500'>Women</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/home.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Home</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/accessories.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Accessories</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/beauty.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Beauty</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/modest-wear.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Modest Wear</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <h4><img src="./pictures/carousel3/kids.png" className='cat-img' alt="" /></h4>
                        <div className='text-center fnt-17 fw-500'>Kids</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel3;
