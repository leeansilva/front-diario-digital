import React from "react";

export default function useCustomFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (url, options) => {
    setLoading(true);
    setError(null);

    const response = await fetch(url, options);

    if (response.ok) {
      if (response.status === 200) {
        const resJSON = await response.json();
        setData(resJSON);
      }

      if (response.status === 404) {
        const resJSON = await response.json();
        setError(resJSON);
      }
    }

    setLoading(false);
  };

  return { data,error, loading, fetchData };
}
