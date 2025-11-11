import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HorizontalMovieCard from "./HorizontalMovieCard";

const MovieList = ({ genreId, index_ ,openModal}) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenSize = window.innerWidth;

  useEffect(() => {
    getMoviesByGenreID();
  }, []);

  const getMoviesByGenreID = () => {
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => setMovieList(resp.data.results))
      .catch((error) => console.log(error));
  };

  const sliderRight = (element) => {
    element.scrollBy({ left: +screenSize, behavior: "smooth" });
  };

  const sliderLeft = (element) => {
    element.scrollBy({ left: -screenSize, behavior: "smooth" });
  };

 
  return (
    <div className="relative">
      <HiChevronLeft
        className={`text-white text-[40px] absolute  z-10 cursor-pointer hidden md:block bg-black/50 rounded-full p-1 hover:scale-110 transition-transform ${
          index_ % 3 === 0 ? "top-1/4 left-4" : "top-1/2 left-4"
        }`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        className=" flex overflow-x-auto scrollbar-none pt-2 px-3 mb:pb-2 "
        ref={elementRef}
      >
        {movieList.map((i, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HorizontalMovieCard movies={i}  openModal={openModal}/>
            ) : (
              <MovieCard movies={i} openModal={openModal}/>
            )}
          </>
        ))}
      </div>
      <HiChevronRight
        className={`text-white text-[40px] absolute  z-10 cursor-pointer hidden md:block bg-black/50 rounded-full p-1 hover:scale-110 transition-transform ${
          index_ % 3 === 0 ? "top-1/4 right-4" : "top-1/2 right-4"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
