import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import './Carousel5.css';

const Carousel4 = () => {
    const [data, setData] = useState([]);

    const userData = async () => {
        try {
            let res = await fetch("https://sapphire-back-main.vercel.app/api/v3/auth/data/women");
            res = await res.json();
            setData(res);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    useEffect(() => {
        userData();
    }, []);

    return (
        <div>
            <div className="text-center fs-4 fw-600 heading mt-4 mb-3">TRENDING</div>
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
                className='mb-5'
            >
                {data.map((x, index) => (
                    <SwiperSlide key={index}>
                        <div className='item'>
                            <h4>
                                <img src={`https://sapphire-back-main.vercel.app/api/v3/auth/${x.img}`} className="card-img-tops" alt={x.title} />
                            </h4>
                            <h6 className='fnt-mont fw-6 ps-2'>{x.title}</h6>
                            <div className="fw-6 fnt-mont ps-2">Rs.{x.price}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel4;
