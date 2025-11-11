import axios from "axios"

const movieBaseUrl = import.meta.env.VITE_BASE_URL
const api_key = import.meta.env.VITE_API_URL
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)


//Movies By Genres
const movieByGenreBaseURL=import.meta.env.VITE_GENRE_BASE_URL+'?api_key='+api_key;
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

const getVideosTeaser = (id)=>
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)

export default {getTrendingVideos,getMovieByGenreId,getVideosTeaser}