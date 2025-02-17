import Input from "../common/Input";

export default function FormSearch() {
  return (
    <div className="flex gap-2 items-center w-full">
      <i className="text-white text-2xl bx bx-search"></i>
      <Input
        type="text"
        name="search-input"
        placeholder="Search here..."
        className="focus:outline-none "
      />
    </div>
  );
}
