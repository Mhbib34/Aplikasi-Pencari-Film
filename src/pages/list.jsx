import Button from "../components/common/Button";

export default function WatchList() {
  const watchList = JSON.parse(localStorage.getItem("watchList") || []);

  return (
    <div className="px-5 py-14 flex gap-3 flex-col">
      <div className="">
        <span className="border py-1 px-2 bg-primary text-secondary rounded-md shadow-[2px_2px_2px_rgba(0,0,0,1)] ">
          Watch List
        </span>
      </div>
      <div className="flex flex-col gap-5">
        {watchList.map((item) => (
          <div className="flex gap-4 h-44 border shadow-[2px_2px_2px_rgba(0,0,0,1)] items-center ">
            <div className="w-[50%] h-full">
              <img
                src={item.Poster}
                alt={item.Title}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col w-[50%] justify-between h-full py-2 gap-2 px-1">
              <span className="text-sm font-medium">{item.Title}</span>
              <span className="text-sm font-medium">{item.Genre}</span>
              <span className="font-medium">⭐{item.imdbRating}</span>
              <div className="flex gap-2">
                <Button
                  type="button"
                  text="Done!"
                  className="bg-primary text-secondary py-1"
                />
                <Button
                  type="button"
                  text="Deleted"
                  className="bg-secondary text-primary py-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
