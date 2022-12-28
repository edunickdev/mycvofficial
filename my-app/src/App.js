import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/navbar";
import Projects from "./Components/Projects";
import Cards from "./Components/cards";

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Header />} exact></Route>
                <Route path="/projects" element={<Projects />} exact></Route>
                <Route path="/about" element={<Cards />} exact></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
