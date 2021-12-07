import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;