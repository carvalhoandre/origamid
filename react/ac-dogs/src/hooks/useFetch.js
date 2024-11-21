import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    if (error) setError(false);

    try {
      setLoading(true);

      response = await fetch(url, options);

      console.log(response);

      if (!response?.ok) throw new Error(response.statusText);

      json = await response.json();
    } catch (error) {
      json = null;
      setError(`Error: ${error.message}`);
    } finally {
      setData(json);
      setLoading(false);

      return { response, json };
    }
  });
  return {
    data,
    error,
    loading,
    request,
  };
};

export { useFetch };
