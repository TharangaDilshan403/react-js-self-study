import { useContext } from "react";
import { Link } from "react-router-dom";
import "./blogList.css";
import { ConventionContext } from "../../util/ConverstionContext";


const Blog = () => {
  const { data, setData } = useContext(ConventionContext);

  return (
    <div>
      {data.map((data) => (
        <div className="blog-preview" key={data.id}>
          <Link to={`/article/${data.id}`}>
            <h2>{data.title}</h2>
            <p>Writen by {data.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Blog;
