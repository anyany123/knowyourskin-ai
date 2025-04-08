export function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        background: "#0070f3",
        color: "white",
        cursor: "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
