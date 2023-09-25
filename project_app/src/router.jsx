import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Homepage.jsx"
import Header from "./commonPage/HeaderPage.jsx"
import About from "./Pages/AboutPage.jsx"
import Footer from "./commonPage/FooterPage.jsx"
import ProjectPage from "./Pages/ProjectPage.jsx"
import PracticePage from "./Pages/PracticePage.jsx"



const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><Home/><Footer/></>,
  },
  {
    path: "/about",
    element: <><Header/><About/><Footer/></>,
  },
  {
    path: "/project",
    element: <><Header/><ProjectPage/><Footer/></>,
  },
  {
    path: "/practice",
    element: <><Header/><PracticePage/><Footer/></>,
  },
]);


export default MainRouter;