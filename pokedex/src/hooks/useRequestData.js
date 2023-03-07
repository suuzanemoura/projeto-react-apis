import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(initialState, path) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const requestData = async (path) => {
    setIsLoading(true);
    try {
      const response = await axios.get(path);
      setData(response.data);
      setIsLoading(false);
      setLoaded(true);
    } catch (error) {
      console.log(error.response);
      setError(true);
    }
  };

  useEffect(() => {
    requestData(path);
  }, [path]);

  return [data, isLoading, loaded, error];
}
