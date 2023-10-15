import React from 'react'
import { Link } from 'react-router-dom'
function MovieList({movies}) {
  return (
    <ul>
        {movies.map((movie) => {
            const { Title, Poster, Type, Year, imdbID, Rated } = movie;
            return <li key={imdbID}>
                        <Link to={`/movie/${imdbID}`}><figure><img src={Poster} alt={Title} /></figure></Link>
                        <h3>{Year} * {Type} * {Rated}</h3>
                        <h2>{Title}</h2>
                   </li>
        })}
    </ul>
  )
}

export default MovieList