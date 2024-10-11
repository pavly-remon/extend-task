import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/Navbar.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import { useDispatch } from "react-redux";
import { setTheme } from "./store/themeSlice.ts";

const App: FC = () => {
  const dispatch = useDispatch();
  const theme = window.localStorage.getItem("shop-theme");
  dispatch(setTheme(theme ?? "light"));
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
