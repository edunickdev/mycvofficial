import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/navbar";
import SubHeader from "./Components/subHeader";
import Projects from "./Components/Projects";
import Cards from "./Components/cards";

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Header />
            <Navbar />
            <SubHeader/>
            <Projects />
            <Cards />
            <Routes>
                <Route path="/" element={<Navbar/>}></Route>
                <Route path="/home" element={<Header />} exact></Route>
                <Route path="/home" element={<SubHeader />} exact></Route>
                <Route path="/projects" element={<Projects />} exact></Route>
                <Route path="/about" element={<Cards />} exact></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
