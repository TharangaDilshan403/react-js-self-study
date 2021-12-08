import NavBar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";

import {ConventionContextProvider} from "./util/ConverstionContext"

function App() {
  return (
    <ConventionContextProvider>
    <div className="App">
      <NavBar />
      <div>
        <Home />
      </div>
    </div>
    </ConventionContextProvider>
  );
}

export default App;
