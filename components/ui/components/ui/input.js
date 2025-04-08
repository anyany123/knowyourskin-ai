export function Input(props) {
  return (
    <input
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        width: "100%",
        marginBottom: "10px"
      }}
      {...props}
    />
  );
}
