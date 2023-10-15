import React from 'react'
import { useFetch } from '../hooks/useFetch'
import MovieList from '../components/MovieList'

function Home() {
    const { data:movies, isPending, error} = useFetch(`http://www.omdbapi.com/?s=${Title}&apikey=6a50e04d`)
    return <>{movies && <MovieList movies={movies} />}</>
}

export default Home