import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';
import Cooksignup from './views/Cooksignup/Cooksignup';
import Usersignup from './views/Usersignup/Usersignup';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/login',
    element: <Login />
  },
   {
    path: '/cooksignup',
    element: <Cooksignup />
  },
  {
    path: '/usersignup',
    element: <Usersignup />
  }
])
root.render(
  <RouterProvider router={router} />

);

