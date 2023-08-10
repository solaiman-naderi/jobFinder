import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const options = {
    method: "GET",
    url: "https://my-json-server.typicode.com/typicode/demo/posts",
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "3620b3d282mshea0b1c78a51a91fp1dfc80jsna4237c3365fa",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response);
      setData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isError, isLoading, refetch };
};

export default useFetch;
