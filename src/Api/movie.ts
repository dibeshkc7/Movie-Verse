import axios from "axios";
import { Idata } from "../interface/Movie";

export const getAllMovies = async () => {
  try {
    const res = await axios.get<Idata>(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTU3ZGIyMTRkMTNlMTVkM2VjMTFlZTY5MDVmMzU5YyIsInN1YiI6IjY2NjU1YmM5N2U5NzMzYjQ2Njc4ZGRmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dwEUYGyNZn1KnGVfOuE1rqkQS5KZad73lXqv2zEwiBE",
        },
      }
    );
    return res.data
  } catch (error:any) {
    console.log(error)
  }
};
