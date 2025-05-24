import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import ProductsDetail from "./pages/ProductsDetail";
import Home from "./pages/Home";
import Layout from "./components/Layout";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product/:id" element={<ProductsDetail />} />
                </Route>
            </Routes>
        </Router>
    )
}

