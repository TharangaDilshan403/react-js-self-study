import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ConventionContextProvider } from "./util/ConverstionContext";

import NavBar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
function App() {
  return (
    <ConventionContextProvider>
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/createArticle" element={<CreateArticle />} />
            
          </Routes>
        </Router>
      </>
    </ConventionContextProvider>
  );
}

export default App;
