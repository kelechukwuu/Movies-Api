import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
const Image_base_url = "https://image.tmdb.org/t/p/original"
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2"

const Slider = () => {
    const screenSize= window.innerWidth
    const [TrendingMovies,setTrendingMovies] = useState([])
    const elementRef = useRef()
    useEffect(()=>{
        getTrendingMovies()

    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            setTrendingMovies(resp.data.results)
        })
    }

   
  const sliderRight = (element) => {
    element.scrollBy({ left: +screenSize, behavior: "smooth" });
  };

  const sliderLeft = (element) => {
    element.scrollBy({ left: -screenSize, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <HiChevronLeft
        className="text-white text-[40px] absolute top-1/2 left-4 z-10 cursor-pointer hidden md:block bg-black/50 rounded-full p-1 hover:scale-110 transition-transform"
        onClick={() => sliderLeft(elementRef.current)}
      />

      {/* Right Arrow */}
      <HiChevronRight
        className="text-white text-[40px] absolute top-1/2 right-4 z-10 cursor-pointer hidden md:block bg-black/50 rounded-full p-1 hover:scale-110 transition-transform"
        onClick={() => sliderRight(elementRef.current)}
      />

      {/* Movie Images */}
      <div
        className="flex overflow-x-scroll scrollbar-none scroll-smooth gap-4 p-4"
        ref={elementRef}
      >
        {TrendingMovies.map((item, index) => (
          <img
            key={index}
            src={Image_base_url + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover object-top-left rounded-xl hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider