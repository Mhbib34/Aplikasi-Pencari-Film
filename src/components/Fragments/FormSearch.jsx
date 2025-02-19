export default function FormSearch({ onChange, onSubmit }) {
  return (
    <div className="flex gap-2 items-center w-full">
      <i className="text-white text-2xl bx bx-search"></i>
      <form onSubmit={onSubmit} className="lg:w-[50%]">
        <input
          type="text"
          name="search-input"
          placeholder="Search here..."
          className="focus:outline-none w-full placeholder:text-white p-1 rounded-md px-2  text-white "
          onChange={onChange}
        />
      </form>
    </div>
  );
}
