import { useState, useEffect, useContext } from "react";
import { ConventionContext } from "../util/ConverstionContext";

const useFetch = (url) => {
  const { data, setData } = useContext(ConventionContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal:abortController.signal })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Abort Error..");
          } else {
            setLoading(false);
            setError(true);
          }
        });
    }, 2000);
    return () => abortController.abort();
  },[url,setData]);

  return { data, loading, error };
};

export default useFetch;
