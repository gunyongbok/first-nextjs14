import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${apiUrl}/movies`;

async function getVideos(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axios.get(`${url}/${id}/videos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return (
    <div>
      <h4>{JSON.stringify(videos)}</h4>
    </div>
  );
};

export default MovieVideos;
