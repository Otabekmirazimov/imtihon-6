import React from "react";
import { useFetch } from "../hooks/useFetch";
import MovieList from "../components/MovieList";
import { useState } from "react";
import { BiSearch } from 'react-icons/bi'

function Home() {
  const [nameMovie, setNameMovie] = useState("");
  const [newNameMovie, setNewNameMovie] = useState("");
  const {
    data: movies,
    isPending,
    error,
  } = useFetch(`https://www.omdbapi.com/?s=${nameMovie}&apikey=6a50e04d`);
  const handleInput = (e) => {
    e.preventDefault();
    if (nameMovie === "") {
      setNameMovie("Don");
    } else {
      setNameMovie(newNameMovie);
    }
  };
  console.log(movies);
  return <>
          <form onSubmit={handleInput} className="search-div">
                <BiSearch className='search-icon' />
                <input onChange={(e) => setNewNameMovie(e.target.value)} type="text" placeholder="Search for movies or TV series" className='ml-[30px] search'/>
                <button className="btn btn-primary btn-outline search-btn">Search</button>
          </form>
          {movies && <MovieList movies={movies.Search} />}
        </>
}

export default Home;