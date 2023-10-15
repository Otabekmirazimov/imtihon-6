import React from "react";
import { Link } from "react-router-dom";
import oval from '../images/Oval.svg'
function MovieList({ movies }) {
  return (
    <ul className="ul-cards grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {movies &&
        movies.map((movie) => {
          const { Title, Poster, Type, Year, imdbID, Rated } = movie;
          return (
            <li key={imdbID} className="text-center">
              <Link to={`/movie/${imdbID}`}>
                <figure>
                  <img src={Poster} alt={Title} className="card-list-img" />
                </figure>
              </Link>
              <h3>
                {Year} | {Type}
              </h3>
              <h2>{Title}</h2>
            </li>
          );
        })}
    </ul>
  );
}

export default MovieList;