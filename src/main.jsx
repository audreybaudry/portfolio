import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Profile from "./pages/Profile/Profile.jsx";
import Projects from "./pages/Projets/Projects";
import Skills from "./pages/Skills/Skills";
import CV from "./pages/CV/CV";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "/Projets",
        element: <Projects />,
      },
      {
        path: "/Competences",
        element: <Skills />,
      },
      {
        path: "/CV",
        element: <CV />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
