import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'
const GenreMovieList = ({openModal}) => {

  return (
    <div>
        
        {
            GenresList.genres.map((i,index)=> index <=4&&(
                <div className='mb:p-5 px-8 md:px-16  mb-2'>
                   <h2 className='font-[20px] text-white'> {i.name}</h2>
                   <MovieList genreId={i.id} index_={index} openModal={openModal}/>
                </div>
            ))
        }
    </div>
  )
}

export default GenreMovieList