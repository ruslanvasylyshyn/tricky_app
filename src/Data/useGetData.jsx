import { useEffect } from "react";

export function useGetData(url, setIsLoad, setLessonsData, setError) {
  useEffect(() => {
    setIsLoad(false);
    fetch(url)
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error("Network failed", { cause: responce.status }, setError(responce));
      })
      .then((data) => {
        setLessonsData(data);
        setError(false);
      })
      .catch((error) => {
        setError(error);
        setLessonsData([]);
      })
      .finally(() => {
        setIsLoad(true);
      });
  }, [url]);
}
