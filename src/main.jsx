import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>hellow world</p> ,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl container mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)

