import { useEffect, useState } from "react";

const useFetch = (fetcher, ...args) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetcher(...args)
      .then((data) => setData(data))
      .catch(setError(error))
      .finally(setLoading(false));
  }, []);

  const refetcher = () => {
    setLoading(true);
    fetcher(...args)
      .then((data) => setData(data))
      .catch(setError(error))
      .finally(setLoading(false));
  };

  return { data, error, loading, refetcher };
};

export default useFetch;
