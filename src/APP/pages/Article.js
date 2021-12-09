import { useParams } from "react-router";
import useFetch from "../API/useFetch";
import Error from "../components/error/Error";
import Loading from "../components/loading/Loading";

const Article = () => {
  const { id } = useParams();

  const {
    data: article,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      {article && <h2>{article.body}</h2>}
      
    </div>
  );
};

export default Article;
