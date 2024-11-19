import React from "react";

const types = {
  email: {
    regex: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
    message: "Preencha um e-mail válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(target.value);

    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Campo obrigatório, por favor, preecha um valor!");
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(!types[type].message);

      return false;
    }

    setError(null);
    return true;
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export { useForm };
