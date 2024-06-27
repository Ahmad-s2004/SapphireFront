import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SapphireX = () => {
    const slides = [
        { src: "./images/img1.png" },
        { src: "./images/img2.GIF" },
        { src: "./images/img3.GIF" },
        { src: "./images/img4.GIF" },
        { src: "./images/img5.png" },
        { src: "./images/img6.png" },
        { src: "./images/img7.png" },
        { src: "./images/img8.png" },
    ];

    return (
        <div>
            <div className="container-fluid">
                <div className="text-center font-mont h5 bg-lightgrey fw-bold my-3 py-3">THE EDIT</div>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    1100: { slidesPerView: 2 },
                    724: { slidesPerView: 2 },
                    500: { slidesPerView: 2 },
                    370: { slidesPerView: 1 },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide.src} className='cat-img' alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SapphireX;