import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "./css/global.css"
import ErrorPage from "./components/error";
import Header from './components/header';
import Footer from './components/footer';
import {Banner1, Banner2} from './components/banner';
import LogementsMenu from './components/logements-menu';
import Layout from './components/layout';
import About from './components/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout>
          <Header />
          <Banner1 />
          <LogementsMenu />
        </Layout>
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <>
        <Layout>
          <Header />
          <Banner2 />
          <About />
        </Layout>
        <Footer />
      </>
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
