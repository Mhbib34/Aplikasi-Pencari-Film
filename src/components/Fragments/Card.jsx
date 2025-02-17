import Button from "../common/Button";

export default function Card({ item }) {
  return (
    <div className="border flex flex-col justify-between p-2 rounded-md md:w-max xs:w-[155px] xxs:w-[140px] lg:w-56">
      <img src={item.Poster} alt="" />
      <p>
        {item.Title.substring(0, 30)}
        {"..."}
      </p>
      <span>{item.Year}</span>
      <Button type="button" text="Detail" className="bg-secondary" />
    </div>
  );
}
