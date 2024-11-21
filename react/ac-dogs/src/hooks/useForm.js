import React from "react";

const types = {
  email: {
    regex: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "A senha deve ter pelo menos 8 caracteres, incluindo letras e números",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize somente números",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (!type) return true;

    if (value.trim()?.length <= 0) {
      setError("Campo obrigatório, por favor, preencha um valor!");
      return false;
    }

    const validationType = types[type];

    if (validationType && !validationType.regex.test(value)) {
      setError(validationType.message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) validate(target.value);
  }

  function onBlur() {
    return validate(value);
  }

  return {
    value,
    error,
    onBlur,
    onChange,
    setValue,
    validate: () => validate(value),
  };
};

export { useForm };
