import Button from "../components/common/Button";

export default function WatchList() {
  const watchList = JSON.parse(localStorage.getItem("watchList") || []);

  return (
    <div className="px-5 lg:px-20 py-14 flex gap-3 flex-col">
      <div className="">
        <span className="border py-1 px-2 bg-primary text-secondary rounded-md shadow-[2px_2px_2px_rgba(0,0,0,1)] ">
          Watch List
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:flex-wrap justify-between">
        {watchList.map((item) => (
          <div className="flex gap-4 lg:flex-col lg:w-60  lg:h-auto h-44 border shadow-[2px_2px_2px_rgba(0,0,0,1)] items-center ">
            <div className="w-[50%] lg:h-[65%] lg:w-full h-full ">
              <img
                src={item.Poster}
                alt={item.Title}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col w-[50%] lg:h-[35%] lg:justify-between  lg:w-full justify-between h-full py-2 gap-2 px-2 lg:items-center">
              <span className="text-sm font-medium lg:text-lg lg:text-center">
                {item.Title}
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
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
