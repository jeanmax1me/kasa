import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./components/error";
import Header from './components/header';
import Footer from './components/footer'; 
import Banner from './components/banner';
import LogementsMenu from './components/logements-menu';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Banner />
        <LogementsMenu />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
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
