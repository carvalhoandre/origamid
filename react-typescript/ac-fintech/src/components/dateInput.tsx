import React from "react";

type DateInput = React.ComponentProps<"input"> & {
  label: string;
};

const generalStyles: React.CSSProperties = {
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s)",
  borderRadius: "var(--gap)",
  background: "var(--color-4)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  ...generalStyles,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyles,
};

const DateInput = ({ label, ...props }: DateInput) => {
  return (
    <>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input type="date" id={label} style={inputStyle} {...props} />
    </>
  );
};

export default DateInput;
