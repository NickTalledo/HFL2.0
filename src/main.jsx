import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import News from "./routes/News.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About.jsx";
import Dtable from "./routes/Dtable.jsx";
import Otable from "./routes/Otable.jsx";
import QBtable from "./routes/QBtable.jsx";
import Potw from "./routes/Potw.jsx";
import CareerStats from "./routes/CareerStats.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/News",
    element: <News />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/QBtable",
    element: <QBtable />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Otable",
    element: <Otable />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Dtable",
    element: <Dtable />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Potw",
    element: <Potw />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/CareerStats",
    element: <CareerStats />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
