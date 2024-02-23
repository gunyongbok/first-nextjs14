import axios from "axios";
import Link from "next/link";

export const metadata = {
  title: "home",
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/movies`;

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getMovies() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

const Homepage = async () => {
  const movies = await getMovies();
  return (
    <>
      {movies.map((movie: Movie) => (
        <li>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Homepage;
