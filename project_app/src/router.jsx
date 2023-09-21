import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Homepage.jsx"
import Header from "./commonPage/HeaderPage.jsx"
import About from "./Pages/AboutPage.jsx"
import Footer from "./commonPage/FooterPage.jsx"

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><Home/><Footer/></>,
  },
  {
    path: "/about",
    element: <><Header/><About/><Footer/></>,
  },
]);


export default MainRouter;