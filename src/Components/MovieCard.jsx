import React from 'react'
const Image_base_url = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movies,openModal}) => {
  return (
    <>
        <img src={Image_base_url+movies.poster_path} alt='poster' className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all ease-out duration-300' onClick={()=> openModal(movies.id)}/>
    </>
  )
}

export default MovieCard