import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';
import UserPofile from './views/UserProfile/UserProfile';
import Usersignup from './views/Usersignup/Usersignup';
import MealPlan from './views/MealPlan/MealPlan';

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
    path: '/userprofile',
    element: <UserPofile />
  },
  {
    path: '/usersignup',
    element: <Usersignup />
  },
  {
    path:'/mealplan',
    element: <MealPlan />
  }
])
root.render(
  <RouterProvider router={router} />

);

