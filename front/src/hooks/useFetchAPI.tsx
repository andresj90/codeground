import { useEffect, useState } from "react";
import { fetchData } from "../api/fetch";

const useFetchApi = (route: string, type: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getRecords = async () => {
      try {
        setIsLoading(!isLoading);
        const response = await fetchData(route, type);
        console.log(response);
        const apiresponse = await response.json();
        setData(apiresponse);
      } catch (error) {
        console.log(error);
        setError(!error);
      }
    };
    getRecords();
  }, [route, type]);

  return { data, isLoading, error };
};

export { useFetchApi };
