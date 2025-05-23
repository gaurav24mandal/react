import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./store/Store.js"
import {Provider} from "react-redux"
import AuthLayout from './AuthLayout.jsx'
import {Login , Signup} from "./components/index.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'

const router = createBrowserRouter([
  {
     path : "/",
     element : <App />,
     children : [
      {
        path : "/",
        element: <Home/>
      },
      {
         path : "/login",
         element : (
           <AuthLayout authentication ={false}>
            <Login/>
           </AuthLayout>
         )
      },{
        path : "/signup",
        element : (
          <AuthLayout authentication ={false}>
          <Signup/>
         </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication={true}>
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication={true}>
            <AddPost />
          </AuthLayout>
        ),
      },
     ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
   </Provider>
  </StrictMode>,
)
