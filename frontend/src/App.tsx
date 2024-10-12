import {FC} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/shop/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductDetails from "./pages/shop/ProductDetails.tsx";
import {useDispatch} from "react-redux";
import {setTheme} from "./store/themeSlice.ts";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import RootLayout from "./pages/shop/RootLayout.tsx";
import AddProduct from "@/pages/admin/AddProduct.tsx";
import EditProduct from "@/pages/admin/EditProduct.tsx";

const App: FC = () => {
    const dispatch = useDispatch();
    const theme = window.localStorage.getItem("shop-theme");
    dispatch(setTheme(theme ?? "light"));
    return (
        <Router>

            <div>
                <Routes>
                    <Route path="/" element={<RootLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products/:id" element={<ProductDetails/>}/>
                    </Route>
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route path="/admin" element={<AddProduct/>}/>
                        <Route path="/admin/edit" element={<EditProduct/>}/>
                    </Route>
                    <Route element={<NotFound/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
