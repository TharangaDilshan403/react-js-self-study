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

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("delete");
    });
  };

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      {article && <h2>{article.body}</h2>}

      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Article;
