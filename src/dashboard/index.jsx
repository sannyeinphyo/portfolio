import About from "./about";
// import Home from "./home";
// import DownloadSection from "./download";
// import Project from "./project";
const Home = lazy(() => import('./home'))
import ContactSection from "./contact";
import SideQuest from "./side_quest";
import { Navigate } from "react-router-dom";

export const dashboardRoute = [
  {
    path: "",
    children: [
      { index: true, element: <Navigate to = "home" replace/> },
      { path: "home", element: <Home /> },
      // { path: "project", element: <Project /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactSection /> },
      // { path: "download", element: <DownloadSection /> },
      { path: "side-quest", element: <SideQuest /> },
    ],
  },
];
