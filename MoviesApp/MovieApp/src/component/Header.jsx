import React, {useState} from 'react'
import {Link , NavLink , useLocation} from 'react-router-dom'
import useLogin from '../context/loginContext'
import useMovie from '../context/MovieContext'
function Header() {
  const {isLogin , setIsLogin, username , setUsername} = useLogin()
  const {addMovie} = useMovie();
  const [movieName , setMovieName] = useState("")
  const location = useLocation();
  const isMoviesPage = location.pathname === '/movies';
  
  
  

 
  async function moviesDetail() {
    if (!movieName.trim()) return;
    const URL = `http://www.omdbapi.com/?apikey=67fc28a4&s=${movieName}`
       try
        {
           const res =  await fetch(URL) 
             const data = await res.json()
           console.log(data);
            if(data.Search)   {
             const movies = data.Search.map((movie)=>({
                 movieId : movie.imdbID,
                 movieName : movie.Title,
                 movieSrc : movie.Poster
             }))
             addMovie(movies)
             console.log(movies);
             
            } 
       } 
       catch (error) {
            console.log(error);
            
       }
     
       
  }
const submitMovieHandler = (e)=>{
   
    if(e.key === 'Enter'){
        
        moviesDetail()
       
        
    }
}






  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to='/' className="flex items-center">
            {isLogin?<span>{`Welcome ${username}`}</span> : "USER"}
            
        </Link>
    
        <div className="flex items-center lg:order-2">
                <Link
                    to="/login"
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
                <Link
                    to="/"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    Get started
                </Link>
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                        to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/movies"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                            }
                        >
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    </ul>
                      {isLogin && isMoviesPage ?<input type="text" 
                               className='m-8 p-4 bg-gray-100  '
                               placeholder='search movies'
                               value={movieName}
                               onChange={(e)=>setMovieName(e.target.value)}
                               onKeyDown={submitMovieHandler}
                      />:null}
                    </div>
            </div>
      </nav>
     
       
    </header>
  )
}

export default Header
