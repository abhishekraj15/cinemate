import { useEffect } from "react";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${title} | Cinemate`;
  });

  return (
    <>
      <main>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-center  flex-wrap gap-4">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MovieList;
