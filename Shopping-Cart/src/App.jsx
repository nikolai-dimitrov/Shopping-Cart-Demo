import { useState } from "react";
import { useLocation } from "react-router";
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ProductProvider } from "./contexts/ProductContext";
import { NotFound } from "./components/NotFound/NotFound";

import { Layout } from "antd";

import styles from "./app.module.css";
const { Footer } = Layout

function App() {
    const [areProductsAvailable, setAreProductsAvailable] = useState(true);

    const location = useLocation();
    const isNotFound = location.pathname == "/404";

    const updateProductsAvailability = (isAvailable) => {
        setAreProductsAvailable(isAvailable)
    };

    return (
        <>
            <Header />
            <ProductProvider>
                <div className={styles.layout}>
                    {!isNotFound && <Navigation />}
                    <main id="main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<OurProducts updateProductsAvailability={updateProductsAvailability} />} />
                            <Route path="/shopping-cart" element={<ShoppingCart areProductsAvailable={areProductsAvailable} />} />
                            <Route path="/404" element={<NotFound />} />
                            <Route path="*" element={<Navigate to="/404" />} />
                        </Routes>
                    </main>
                </div>
            </ProductProvider>
            <Footer className={styles.footer} />


        </>
    )
}
export default App;
