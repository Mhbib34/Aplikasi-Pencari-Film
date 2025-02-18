export default function FormSearch({ onChange, onSubmit }) {
  return (
    <div className="flex gap-2 items-center w-full">
      <i className="text-white text-2xl bx bx-search"></i>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search-input"
          placeholder="Search here..."
          className="focus:outline-none placeholder:text-white p-1 rounded-md px-2 w-full text-white "
          onChange={onChange}
        />
      </form>
    </div>
  );
}
