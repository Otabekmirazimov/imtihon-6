import React from 'react'
// components
import Navbar from './components/Navbar'
import MainLayout from './layouts/MainLayout'
import Trending from './pages/Trending'
import MoviesPage from './pages/MoviesPage'
import Series from './pages/Series'
import Bookmarked from './pages/Bookmarked'
import Error from './pages/Error'
import Home from './pages/Home'
import Movie from './pages/Movie'
// rrd
import { Children } from 'react'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/trending',
          element: <Trending/>
        },
        {
          path: '/moviesPage',
          element: <MoviesPage/>
        },
        {
          path: '/series',
          element: <Series/>
        },
        {
          path: '/bookmarked',
          element: <Bookmarked/>
        },
        {
          path: 'movie/:id',
          element: <Movie/>
        },
      ]
    },
  ])

  return (
    <div>
      <MainLayout/>
      <RouterProvider routes={routes} />
    </div>
  )
}

export default App