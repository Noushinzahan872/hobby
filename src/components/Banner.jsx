













import React from 'react';
import image from '../assets/f6305174-1181-4c5b-bc1a-1ecde329ec06.jpeg'
import hobby from '../assets/42398a6d-3e36-467c-85cc-66b07ce41330.jpeg';
import  running from '../assets/c90c51f2-92ea-4878-8572-4f7293c5f053.jpeg'
import  cocking from '../assets/f09d34de-dbb3-4445-80f9-dd55a19e4424.jpeg'


const Banner = () => {

 
  return (

<div className="flex flex-col-reverse lg:flex-row items-center gap-6 px-4 lg:px-16 py-10 bg-base-100">


   {/* Left Side Text */}
   <div 
        className="lg:w-1/2 text-center lg:text-left space-y-5" 
        
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neutral">
      Welcome Our <span className='text-4xl text-blue-800 md:text-5xl font-bold'>Hobby-HUB</span>
        </h1>
        <p className="text-lg">
          HobbyHub is your go-to space to explore creative hobbies, connect with fellow enthusiasts, and share your unique talents. Whether it’s art, music, coding, or gardening — your passion has a home here.
        </p>
        <button className="btn btn-primary" data-aos="zoom-in">
          Discover More
        </button>
      </div>
      

      {/* Right Side Carousel with ONLY IMAGES */}
      <div className="lg:w-1/2 w-full">
        <div className="carousel w-full rounded-xl shadow-xl">
          
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img src={image} className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img src={running} className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img src={cocking} className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img src={hobby} className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </div>
    </div>
);
};

export default Banner;
