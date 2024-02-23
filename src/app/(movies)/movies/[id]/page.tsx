import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/movies`;

async function getMovies(id: string) {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getVideos(id: string) {
  try {
    const response = await axios.get(`${url}/${id}/videos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
  return (
    <div>
      <h1>Movie : {movie.title}</h1>
    </div>
  );
};

export default MovieDetail;
