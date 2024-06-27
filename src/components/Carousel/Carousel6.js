import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel6.css';
import { Pagination } from 'swiper/modules';

const Carousel6 = () => {
  const slides = [
    {
      img: './pictures/carousel6/Durefishan.png',
      name: 'Durefishan',
      desc: 'Embroidered Chiffon Suit'
    },
    {
      img: './pictures/carousel6/hania.png',
      name: 'Hania Amir',
      desc: 'Embroidered Raw Silk Suit'
    },
    {
      img: './pictures/carousel6/jiya.png',
      name: 'Jiya Khurram',
      desc: 'Embroidered Khaddi Net Suit'
    },
    {
      img: './pictures/carousel6/kanza.png',
      name: 'Kanza Babar',
      desc: 'Embroidered Dobby Suit'
    },
    {
      img: './pictures/carousel6/mehvish.png',
      name: 'Mehvish Ahmad',
      desc: 'Solid Jacquard Shirt'
    },
    {
      img: './pictures/carousel6/kinza.png',
      name: 'Kinza Hashmi',
      desc: 'Embroidered Organza Suit'
    },
    {
      img: './pictures/carousel6/rija.png',
      name: 'Rija Mujahid',
      desc: 'Embroidered Karandi Suit'
    }
  ];

  const renderSlides = () => {
    return slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className='item'>
          <h4><img src={slide.img} alt={slide.name} /></h4>
          <div className="text-center font-mont h6 fnt-bold">{slide.name}</div>
          <div className="text-center font-mont h10">wearing our</div>
          <div className="text-center font-mont h9">{slide.desc}</div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className='container-fluid py-3 color'>
      <div className="text-center h4 font-mont fnt-bold">STYLED BY YOU</div>
      <div className="text-center h8 font-mont">#SAPPHIREXME</div>
      <div className='container mt-5'>
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            1100: { slidesPerView: 4 },
            724: { slidesPerView: 3 },
            500: { slidesPerView: 2 },
            200: { slidesPerView: 2 }
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className='swiper-container'
        >
          {renderSlides()}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel6;
