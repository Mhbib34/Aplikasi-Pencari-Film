import Button from "../common/Button";
import FormSearch from "../Fragments/FormSearch";

export default function SearchBar({ onChange, onSubmit }) {
  return (
    <div className="bg-primary lg:py-2 py-3 px-5 lg:px-20 flex gap-2 items-center">
      <FormSearch onChange={onChange} onSubmit={onSubmit} />
      <Button
        type="button"
        text="Search"
        className="bg-secondary hover:opacity-80 transition-all duration-200 ease-in"
      />
    </div>
  );
}
