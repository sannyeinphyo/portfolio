import About from "./about";
import Home from "./home";
import Project from "./project";
import ContactSection from "./contact";
import SideQuest from "./side_quest";
import DownloadSection from "./download";

export const dashboardRoute = [
  {
    path: "",
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "project", element: <Project /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactSection /> },
      { path: "download", element: <DownloadSection /> },
      { path: "side-quest", element: <SideQuest /> },
    ],
  },
];
