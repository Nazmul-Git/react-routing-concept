import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import ErrorPath from './Components/ErrorPath/ErrorPath.jsx';
import Home from './Components/Home/Home.jsx';
import FirstPage from './Components/FirstPage/FirstPage.jsx';
import AllUsers from './Components/AllUsers/AllUsers';
// const router= createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>,
//     errorElement:<ErrorPath></ErrorPath>
//   },
//   {
//     path:'/about',
//     element: <About></About>,
//     errorElement:<ErrorPath></ErrorPath>
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>,
//     errorElement:<ErrorPath></ErrorPath>
//   }
// ])

// nested route
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPath></ErrorPath>,
    children: [
      {
        path:'/',
        element:<FirstPage></FirstPage>,
        errorElement:<ErrorPath></ErrorPath>
      },
      {
        path:'/users',
        element: <AllUsers></AllUsers>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'about',
        element: <About></About>,
        errorElement: <ErrorPath></ErrorPath>
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
        errorElement: <ErrorPath></ErrorPath>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
