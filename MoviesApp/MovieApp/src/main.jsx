import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createRoutesFromElements, RouterProvider, Route, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import LoginPage from './component/LoginPage.jsx'
import Movies from './component/Movies.jsx'
import useLogin, { LoginContextWrapper } from './context/loginContext.jsx'
import useMovie ,{MovieProvider} from './context/MovieContext.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element ={<App />}>
     <Route path='' element={<Home/>}/>
     <Route path='login' element={<LoginPage/>}/>
     <Route path='movies' element={<Movies/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <LoginContextWrapper>
        <RouterProvider router={router} />
      </LoginContextWrapper>
    </MovieProvider>
  </StrictMode>
)
