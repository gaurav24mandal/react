 import { Children, createContext , useContext, useState } from "react";

export const MovieContext = createContext({
      movieDetails : [],
      addMovie: ()=>{},
      delMovie: ()=>{},
      favMovie : ()=>{},

 });
export const MovieProvider = ({children})=>{
    const [movieDetails , setMovieDetails] = useState([]);
    const addMovie = (movies)=>{
        setMovieDetails(movies)
    }
    const delMovie = (id)=>{
        setMovieDetails((prev)=> prev.filter((prevMovie)=> prevMovie.id !==id))
    }

    const favMovie = (id)=>{}

    return (
        <MovieContext.Provider value={{movieDetails,addMovie,delMovie, favMovie}}>
            {children}
        </MovieContext.Provider>
    )
}


export default function useMovie(){
    return  useContext(MovieContext);
}