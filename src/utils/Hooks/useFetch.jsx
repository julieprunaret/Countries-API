import { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const key = 'sk-lG9b65423a111f8e32781';

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url + key);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
