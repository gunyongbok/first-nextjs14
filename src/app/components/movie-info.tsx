import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/movies`;

async function getMovies(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.get(`${url}/${id}/videos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movies = await getMovies(id);
  return (
    <div>
      <h4>{JSON.stringify(movies)}</h4>
    </div>
  );
};

export default MovieInfo;
