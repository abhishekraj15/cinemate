import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search result for ${queryTerm} | Cinemate`;
  });
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length > 0
            ? `Search result for : ${queryTerm}`
            : `No result found for : ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center  flex-wrap gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
