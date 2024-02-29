import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "./css/global.css"
import AboutPage from './pages/aboutpage';
import ErrorPage from './pages/errorpage';
import HomePage from './pages/homepage';
import LogementPage from './pages/logementpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
    errorElement:
      <ErrorPage />
  },
  {
    path: "/about",
    element: (
      <AboutPage />
    )
  },
  {
    path: "/logements/:id", // Dynamic route for logements
    element: (
      <LogementPage />
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
