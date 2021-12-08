
// import styles from "./Home.module.css";

import BlogList from "../../components/blogList/BlogList";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import useFetch from "../../API/useFetch";

const Home = () => {

  const { blogData, loading, error } = useFetch("http://localhost:8000/blogs");
  
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      <div>{blogData && <BlogList />}</div>
    </>
  );
};

export default Home;
