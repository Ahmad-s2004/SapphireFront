import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel5.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Carousel5 = () => {
  const slides = [
    './pictures/carousel5/styled-by-you.png',
    './pictures/carousel5/home-x-naimal.png',
    './pictures/carousel5/sherwani.png',
    './pictures/carousel5/fabric-glossary.png',
    './pictures/carousel5/the-edit.png',
    './pictures/carousel5/mughal-mirage.png'
  ];

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img src={slide} alt={`Slide ${index + 1}`} />
      </SwiperSlide>
    ));
  };

  return (
    <>
      <div className="swiper-1">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {renderSlides()}
        </Swiper>
      </div>
      <div className="swiper-2">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {renderSlides()}
        </Swiper>
      </div>
      <div className="swiper-3">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {renderSlides()}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel5;
