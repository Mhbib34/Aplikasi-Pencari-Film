import Button from "../common/Button";
import FormSearch from "../Fragments/FormSearch";

export default function SearchBar({ onChange, onSubmit }) {
  return (
    <div className="bg-primary  py-3 px-5 lg:px-20 flex gap-2 items-center sticky top-0 z-10">
      <FormSearch onChange={onChange} onSubmit={onSubmit} />
      <Button
        type="button"
        text="Search"
        className="bg-secondary py-1 hover:opacity-80 transition-all duration-200 ease-in"
        onClick={onSubmit}
      />
    </div>
  );
}
