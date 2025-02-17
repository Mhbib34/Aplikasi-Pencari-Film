import Button from "../common/Button";
import FormSearch from "../Fragments/FormSearch";

export default function SearchBar() {
  return (
    <div className="bg-primary py-3 lg:py-2 px-5 lg:px-20 justify-center lg:justify-start flex gap-2 items-center">
      <FormSearch />
      <Button type="button" text="Search" className="bg-secondary" />
    </div>
  );
}
