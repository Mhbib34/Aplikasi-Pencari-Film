import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { useState } from "react";
import Swal from "sweetalert2";

export default function WatchList() {
  const [watchList, setWatchList] = useState(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchList")) || [];
    return storedWatchlist;
  });

  function handleRemoveItem(imdbID) {
    Swal.fire({
      title: "Deleted Item",
      text: "Are you sure you want to delete the item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bab8f3",
      cancelButtonColor: "#2b2b2b",
      confirmButtonText: "Deleted",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success",
          text: "Item deleted Successfully",
          icon: "success",
          iconColor: "#bab8f3",
          confirmButtonColor: "#bab8f3",
          confirmButtonText: "Close",
        });
        const filteredData = watchList.filter((item) => item.imdbID !== imdbID);
        setWatchList(filteredData);
        localStorage.setItem("watchList", JSON.stringify(filteredData));
      }
    });
  }
  return (
    <div className="px-5 lg:px-20 py-14 flex gap-3 flex-col">
      <div className="">
        <Link to="/">
          <Button
            text="Home"
            className="py-1 bg-primary text-secondary px-4 border-secondary border shadow-[2px_2px_2px_rgba(0,0,0,1)]"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:flex-wrap justify-between">
        {watchList.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 lg:flex-col lg:w-60  lg:h-auto h-44 border shadow-[2px_2px_2px_rgba(0,0,0,1)] items-center "
          >
            <div className="w-[50%] lg:h-[65%] lg:w-full h-full ">
              <img
                src={item.Poster}
                alt={item.Title}
                className="w-full h-full"
              />
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
                  text="Done!"
                  className="bg-primary text-secondary py-1 lg:w-[40%]"
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
        ))}
      </div>
    </div>
  );
}
