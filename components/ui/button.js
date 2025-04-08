export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-pink-600 text-white hover:bg-pink-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
