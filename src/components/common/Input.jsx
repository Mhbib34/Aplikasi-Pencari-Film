export default function Input({ type, placeholder, name, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className={` placeholder:text-white p-1 rounded-md px-2 w-full text-white ${className}`}
    />
  );
}
