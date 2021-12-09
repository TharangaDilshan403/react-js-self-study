import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>not found</h2>
      <Link to="/">
        <p>go back to home page</p>
      </Link>
    </div>
  );
};

export default NotFound;
