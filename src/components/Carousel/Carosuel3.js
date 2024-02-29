import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Carousel3.css"

const Carousel3 = () => {
    const options = {
      items:4,
        loop: true,
        dots: false,
        loop: true,
        slidePerView:4,
        responsive: {
            1100:{
              items:4,
            },
            724:{
              items:3,  
            },
            500:{
              items:2,
            },
            200:{
              items:2,  
            }
          }
    }
  return (
    <div>
        <div className="text-center fs-4 heading fw-600 mt-4 mb-3">SHOP BY CATEGORY</div>
        {/* <div className='underline mb-4'></div> */}
        <OwlCarousel className='owl-theme' loop margin={10} {...options}>
    <div class='item'>
        <h4><img src="./pictures/carousel3/unstiched.png"className='cat-img' alt="" /></h4>
        {/* <h6 className='text-center'>Unstiched</h6> */}
        <div className='text-center fnt-17 fw-500'>Unstiched</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/men.png"className='cat-img' alt="" /></h4>
        <div className='text-center fnt-17 fw-500'>Men</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/women.png" className='cat-img' alt="" /></h4>
        {/* <h6 className='text-center mt-2'>Women</h6> */}
        <div className='text-center fnt-17 mt-1 fw-500'>Women</div>

    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/home.png" className='cat-img' alt="" /></h4>
        <div className='text-center fnt-17 fw-500'>Home</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/accessories.png" className='cat-img' alt="" /></h4>
        <div className='text-center fnt-17 fw-500'>Accessories</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/beauty.png" className='cat-img' alt="" /></h4>
        <div className='text-center fnt-17 fw-500'>Beauty</div>
        
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/modest-wear.png" className='cat-img' alt="" /></h4>
        <div className='text-center fnt-17 fw-500'>Modest Wear</div>

    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/kids.png" className='cat-img' alt="" /></h4>
        <div className='text-center fnt-17 fw-500'>Kids</div>
    </div>
</OwlCarousel>;
    </div>
  )
}

export default Carousel3
