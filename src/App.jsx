import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
// components

// rrd

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/movie/:imdbID",
          element: <Movie />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;