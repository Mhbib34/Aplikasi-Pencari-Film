import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { useState, useCallback } from "react";
import Swal from "sweetalert2";

export default function WatchList() {
  const [watchList, setWatchList] = useState(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchList")) || [];
    return storedWatchlist;
  });

  const updateLocalStorage = (data) => {
    localStorage.setItem("watchList", JSON.stringify(data));
  };

  const handleDoneWatching = useCallback(
    (imdbID) => {
      const updatedWatchList = watchList.map((item) =>
        item.imdbID === imdbID ? { ...item, done: !item.done } : item
      );
      setWatchList(updatedWatchList);
      updateLocalStorage(updatedWatchList);
    },
    [watchList]
  );

  const handleRemoveItem = useCallback(
    (imdbID) => {
      Swal.fire({
        title: "Delete Movie",
        text: "Are you sure you want to delete this movie?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#bab8f3",
        cancelButtonColor: "#2b2b2b",
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          const filteredData = watchList.filter(
            (item) => item.imdbID !== imdbID
          );
          setWatchList(filteredData);
          updateLocalStorage(filteredData);
          Swal.fire("Success", "Movie deleted successfully", "success");
        }
      });
    },
    [watchList]
  );

  const handleRemoveAllItem = useCallback(() => {
    Swal.fire({
      title: "Delete All Movies",
      text: "Are you sure you want to delete all movies?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bab8f3",
      cancelButtonColor: "#2b2b2b",
      confirmButtonText: "Delete All",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setWatchList([]);
        updateLocalStorage([]);
        Swal.fire("Success", "All movies deleted successfully", "success");
      }
    });
  }, []);

  return (
    <div className="px-5 lg:px-20 py-14 flex gap-3 flex-col">
      <div className="flex gap-3 mb-4">
        <Link to="/">
          <Button
            text="Home"
            className="py-1 bg-primary text-secondary px-4 border-secondary border shadow-[2px_2px_2px_rgba(0,0,0,1)]"
          />
        </Link>
        <Button
          text="Delete All Movies"
          onClick={handleRemoveAllItem}
          className="py-1 bg-secondary text-primary px-4 border-primary border shadow-[2px_2px_2px_rgba(0,0,0,1)]"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:flex-wrap justify-between">
        {watchList.length > 0 ? (
          watchList.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 lg:flex-col lg:w-60  lg:h-auto h-44 border shadow-[2px_2px_2px_rgba(0,0,0,1)] items-center "
            >
              <div className="w-[50%] lg:h-[65%] lg:w-full h-full relative ">
                <img
                  src={item.Poster}
                  alt={item.Title}
                  className="w-full h-full"
                />
                {item.done && (
                  <div className="w-10 h-10 bg-primary text-white flex justify-center items-center rounded-full text-xl shadow-lg absolute -top-3 -left-3">
                    ✔️
                  </div>
                )}
              </div>
              <div className="flex flex-col w-[50%] lg:h-[35%] lg:justify-between  lg:w-full justify-between h-full py-2 gap-2 px-2 lg:items-center">
                <span className="text-sm font-medium lg:text-lg lg:text-center">
                  {item.Title.substring(0, 30)}
                  {"..."}
                </span>
                <span className="text-sm font-medium">{item.Genre}</span>
                <span className="font-medium">⭐{item.imdbRating}</span>
                <div className="flex w-full justify-between lg:justify-center lg:gap-2">
                  <Button
                    type="button"
                    text={item.done ? "Undo" : "Done!"}
                    className="bg-primary text-secondary py-1 lg:w-[40%]"
                    onClick={() => handleDoneWatching(item.imdbID)}
                  />
                  <Button
                    type="button"
                    text="Deleted"
                    className="bg-secondary text-primary py-1 lg:w-[40%]"
                    onClick={() => handleRemoveItem(item.imdbID)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full text-center mt-10">
            <span className="font-medium">Your Watch List Still Empty 😑</span>
          </div>
        )}
      </div>
    </div>
  );
}
