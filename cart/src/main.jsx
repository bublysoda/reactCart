import { StrictMode } from 'react'
import { useState, useEffect } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Shop from './Shop.jsx'


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
