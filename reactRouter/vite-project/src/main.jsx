import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github, { FectchApi } from './components/Github.jsx'
import Privacy from './components/Privacy.jsx'
 const router  = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        
        path:"github",
        element:<Github/>,
        loader:FectchApi
        
      },
      {
        path: "privacy",
        element : <Privacy/>
      }
    ]
  }
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <RouterProvider router = {router}/>
  </StrictMode>,
)
