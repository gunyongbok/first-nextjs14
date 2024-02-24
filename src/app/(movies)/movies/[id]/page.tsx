import MovieInfo from "@/app/components/movie-info";
import MovieVideos from "@/app/components/movie-videos";
import { Suspense } from "react";

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
