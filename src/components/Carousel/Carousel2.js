import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./Carousel2.css";

const Carousel2 = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className="align-items-center row">
                <div className="col-lg-2 text-center h3 w-25 font-montd fnt-bol">WHAT'S <br /> NEW</div>
                <Swiper
                    className='w-75 col-lg-10'
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={false}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1100: { slidesPerView: 6 },
                        724: { slidesPerView: 5 },
                        500: { slidesPerView: 3 },
                        200: { slidesPerView: 2 },
                    }}
                >
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic1.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic2.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic3.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic4.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic5.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic6.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic7.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item'>
                            <h4><img src="./pictures/carousel2/pic8.avif" className='circle' alt="" /></h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel2;
