import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/common/Button";
export default function DetailMovie() {
  const { imdbID } = useParams();
  const [detailMovie, setDetailMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=99aca4ec&i=${imdbID}`
        );
        if (!response.ok) {
          throw new Error("Failed to get data!");
        }
        const data = await response.json();
        setDetailMovie(data || []);
      } catch (error) {
        console.error(error);
        setDetailMovie([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="w-full flex h-screen justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-r-transparent"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:px-20 p-5 py-10 gap-10 h-screen justify-between ">
      <div className="lg:flex gap-2 items-center">
        <div className="flex justify-center lg:w-[50%]">
          <img src={detailMovie.Poster} alt="" className="lg:w-96 w-56 " />
        </div>
        <div className="text-justify lg:w-[50%] lg:flex lg:flex-col lg:gap-2 mt-5 lg:text-2xl">
          <span>{detailMovie.Plot}</span>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex gap-1 items-center">
              <i className="bx bx-time-five text-2xl gap-2"></i>
              <span>{detailMovie.Runtime}</span>
            </div>
            <span className="font-medium">
              Language : {detailMovie.Language}
            </span>
            <span className="font-medium">Country : {detailMovie.Country}</span>
            <span className="font-medium">
              Released : {detailMovie.Released}
            </span>
            <span className="font-medium">Genre : {detailMovie.Genre}</span>
            <span className="font-medium">
              Rating : ⭐{detailMovie.imdbRating}
            </span>
            <span className="font-medium">
              Director : {detailMovie.Director}
            </span>
            <span className="font-medium">Awards : {detailMovie.Awards}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <Button
          type="button"
          text="Add to watch list"
          className="bg-secondary w-full lg:py-3 py-2"
        />
        <Link to="/" className="lg:w-full">
          <Button
            type="button"
            text="Back to home"
            className="bg-primary text-secondary w-full lg:py-3 py-2"
          />
        </Link>
      </div>
    </div>
  );
}
