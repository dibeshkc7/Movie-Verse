import React from "react";
import MovieCard from "../common/Movie Card/moviecard";
import { IMovie } from "../../interface/Movie";

interface Props {
  movies: IMovie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5'>
      {movies.map((movie, idx) => (
        <div>
          <MovieCard movie={movie}/>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
