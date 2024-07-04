import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'

import styles from "./app.module.css"
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";


import { Layout } from "antd";
const { Footer } = Layout

function App() {
    return (
        <>
            <Header />
            <div className={styles.layout}>
                <Navigation />
                <main id="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<OurProducts />} />
                        <Route path="/shopping-cart" element={<ShoppingCart />} />

                    </Routes>
                </main>
            </div>
            <Footer />


        </>
    )
}
export default App;
