import { useEffect, useContext, useState } from "react";
import styles from "./Home.module.css";
import Blog from "../../components/Blog/Blog";
import Loading from "../../components/Loading/Loading";

import { ConventionContext } from "../../util/ConverstionContext";

const Home = () => {
  const { blogData, setBlogData } = useContext(ConventionContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading && <Loading />}
        {blogData && <Blog />}
      </div>
    </>
  );
};

export default Home;
