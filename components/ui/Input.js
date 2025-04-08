import React from "react";

export function Input({ type = "text", placeholder = "", className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-pink-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 ${className}`}
      {...props}
    />
  );
}
