import { useState, useEffect ,useContext} from "react";
import {ConventionContext} from "../util/ConverstionContext"

const useFetch = (url) => {

  const { blogData, setBlogData } = useContext(ConventionContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return {blogData,loading,error}
};

export default useFetch;
