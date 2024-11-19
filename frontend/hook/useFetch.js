import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error from fetching data from strapi", error);
      }
    };
    fetchApi();
  }, [url]);
  return { data };
};
export default useFetch;
