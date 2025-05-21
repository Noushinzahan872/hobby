
import React from 'react';

const Banner = () => {

 

  return (

<div className="flex flex-col-reverse lg:flex-row items-center gap-6 px-4 lg:px-16 py-10 bg-base-100">


   {/* Left Side Text */}
   <div 
        className="lg:w-1/2 text-center lg:text-left space-y-5" 
        
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neutral">
      Welcome Our Hobby-HUB
        </h1>
        <p className="text-lg text-gray-600" data-aos="fade-up">
          Dive into action-packed sports, engage in intellectual debates, and participate in top-notch workshops and conferences.
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
            <img src="" className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img src="" className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img src="" className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img src="" className="w-full h-64 md:h-[400px] object-cover rounded-xl" />
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
