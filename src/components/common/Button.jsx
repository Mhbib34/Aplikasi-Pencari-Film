export default function Button({ type, text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-2  text-primary font-medium text-sm rounded-lg cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
