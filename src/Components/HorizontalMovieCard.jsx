import ModalBox from './ModalBox'
import { useEffect,useState } from 'react';
const Image_base_url = "https://image.tmdb.org/t/p/original"


const HorizontalMovieCard = ({movies,openModal}) => {
  //console.log(movies)
  

   
  return (
    <section>
        <img src={Image_base_url+movies.backdrop_path} alt='poster' className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all ease-out duration-300' onClick={() => openModal(movies.id)}
 />
        <h2 className='w-[110px] md:w-[200px] text-white text-center p-2'>{movies.title}</h2>
    </section>
  )
}

export default HorizontalMovieCard