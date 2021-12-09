import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConventionContextProvider } from "./util/ConverstionContext";

import NavBar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";
import Article from "./pages/Article";
import NotFound from "./pages/404"
function App() {
  return (
    <ConventionContextProvider>
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/createArticle" element={<CreateArticle />} />
            <Route path="/article/:id" element={<Article />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </>
    </ConventionContextProvider>
  );
}

export default App;
