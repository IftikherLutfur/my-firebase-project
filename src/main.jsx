import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Order from './Components/Order/Order';
import Private from './Routes/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: 'up',
        element: <Home></Home>
      },
      {
        path: '/in',
        element: <Login></Login>
      },
      {
        path:'/order',
        element: <Private><Order></Order></Private> 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
