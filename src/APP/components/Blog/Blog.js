import { useContext } from "react";
import  "./Blog.css";
import { ConventionContext } from "../../util/ConverstionContext";
import colors from "../../constants/colors";

const Blog = () => {
  const { blogData, setBlogData } = useContext(ConventionContext);

  return (
    <div >
      {blogData.map((blogData) => (
        <div className="blog-preview" key={blogData.id}>
          <h2>{blogData.title}</h2>
          <p>Writen by {blogData.author}</p>
        </div>
      ))}
    </div>
  );
};
export default Blog;