import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Main from './components/Main';
import Home from './components/Home';
import Menu from './components1/Menu';
import Order from './components1/Order';
import Login from './components/components2/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
       {
         path:'/',
         element:<Home></Home>
       },
       {
         path: '/menu',
         element:<Menu></Menu>
       },
       {
         path:`/order/:category`,
         element:<Order></Order>
       },
       {
         path: '/login',
         element: <Login></Login>
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>
);

