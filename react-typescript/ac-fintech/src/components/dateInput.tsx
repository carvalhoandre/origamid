import React from "react";

type DateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: DateInput) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} {...props} />
    </>
  );
};

export default DateInput;
