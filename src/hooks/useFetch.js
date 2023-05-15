import { useEffect, useState } from "react";

const useFetch = (fetcher) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetcher()
      .then((data) => setData(data))
      .catch(setError(error))
      .finally(setLoading(false));
  });

  const refetcher = () => {
    setLoading(true);
    fetcher()
      .then((data) => setData(data))
      .catch(setError(error))
      .finally(setLoading(false));
  };

  return { data, error, loading, refetcher };
};

export default useFetch;
