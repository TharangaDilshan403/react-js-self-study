import { useContext } from "react";
import { Link } from "react-router-dom";
import "./blogList.css";
import { ConventionContext } from "../../util/ConverstionContext";

const Blog = () => {
  const { blogData, setBlogData } = useContext(ConventionContext);

  const handleDelete = (id) => {
    const newBlog = blogData.filter((blogData) => blogData.id !== id);
    setBlogData(newBlog);
  };

  return (
    <div>
      {blogData.map((blogData) => (
        <div className="blog-preview" key={blogData.id}>
          <Link to={`/article/${blogData.id}`}>
            <h2>{blogData.title}</h2>
            <p>Writen by {blogData.author}</p>
          </Link>
          <button onClick={() => handleDelete(blogData.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Blog;
