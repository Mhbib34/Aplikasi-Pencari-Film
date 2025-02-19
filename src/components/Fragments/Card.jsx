import Button from "../common/Button";

export default function Card({ item }) {
  function handleClick(imdbID) {
    const newTabUrl = `/detail/${imdbID}`;
    window.open(newTabUrl, "_blank", "noopener, noreferrer");
  }
  return (
    <div className="shadow-2xl flex flex-col gap-2 items-center justify-between p-2 rounded-md md:w-max xs:w-[155px] xxs:w-[140px] lg:w-56">
      <img src={item.Poster} alt="" />
      <p className="text-center">
        {item.Title.substring(0, 30)}
        {"..."}
      </p>
      <Button
        type="button"
        text="Detail"
        className="bg-secondary w-full opacity-80 hover:opacity-100 transition-all duration-200 ease-in p-1"
        onClick={() => handleClick(item.imdbID)}
      />
    </div>
  );
}
