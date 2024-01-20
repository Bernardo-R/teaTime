import { useState, useEffect } from "react";

const useApi = (url) => {
  const BASE_URL = "https://boonakitea.cyclic.app";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Response is not in JSON format");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, BASE_URL };
};

export default useApi;
