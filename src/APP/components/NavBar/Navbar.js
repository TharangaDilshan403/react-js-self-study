import styles from "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1> The Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/createArticle">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
