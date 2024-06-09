import React, { useEffect, useState } from "react";
import MovieList from "../movie list/MovieList";
import { getAllMovies } from "../../Api/movie";
import { IMovie } from "../../interface/Movie";

const AllMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    getAllMovies()
      .then((res) => res && setMovies(res?.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default AllMovies;
