import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path : '/',
    element: <Home />
  },
  {
    path : 'about',
    element: <About />
  },
  {
    path : 'contact',
    element: <Contact />
  },
  {
    path : 'login',
    element: <Login />
  }
])
root.render(
  
  
  <RouterProvider router={router} />

);

