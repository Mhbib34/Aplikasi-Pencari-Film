import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function Card({ item }) {
  const navigate = useNavigate();
  function handleClick(imdbID) {
    navigate(`/detail/${imdbID}`);
  }
  return (
    <div className="border flex flex-col items-center justify-between p-2 rounded-md md:w-max xs:w-[155px] xxs:w-[140px] lg:w-56">
      <img src={item.Poster} alt="" />
      <p className="text-center">
        {item.Title.substring(0, 30)}
        {"..."}
      </p>
      <Button
        type="button"
        text="Detail"
        className="bg-secondary w-full"
        onClick={() => handleClick(item.imdbID)}
      />
    </div>
  );
}
