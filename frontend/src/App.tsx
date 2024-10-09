import "./App.scss";
import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Navbar from "./components/Navbar.tsx";

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
