import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Layout from './components/Layout';
import Menu from './components/Menu/Menu';
import Price from './components/Price/Price';
import AddCoffee from './components/Add-Coffee/AddCoffee';
import About from './components/About/About';
import Visit from './components/Visit-us/Visit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"/menu",
      element:<Menu/>
    },
    {
      path:"/price",
      element:<Price/>
    },

    {
      path:"/addcoffee",
      element:<AddCoffee/>
    },

    {
      path:"/about",
      element:<About/>
    },

    {
      path:"/visit-us",
      element:<Visit/>
    },


  ]},


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
