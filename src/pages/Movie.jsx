import { NavLink, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function Movie() {
    const { imdbID } = useParams()
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=6a50e04d`
    const { data: movie, error, isPending } = useFetch(url)
  return (
    <div className="mx-full mt-10 flex gap-7 items-center">
      {movie && <>
        <img className="rounded-xl" src={movie.Poster} alt={movie.Title} height="550" width="550" />
        <div>
          <h2 className="text-xl font-bold mb-4">{movie.Title}</h2>
          <p className="mb-5">
            <span className="font-bold">Year:</span> {movie.Year}
          </p>
          <p className="mb-5">
            <span className="font-bold">Released:</span> {movie.Released}
          </p>
          <p className="mb-5">
            <span className="font-bold">Genre:</span> {movie.Genre}
          </p>
          <p className="mb-5">
            <span className="font-bold">Director:</span> {movie.Director}
          </p>
          <NavLink className="btn btn-outline btn-secondary mt-4" to="/">Go Movies</NavLink>
        </div>
      </>}
    </div>
  )
}

export default Movie