import { Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ProductContextOutlet } from './contexts/ProductContext'

import { Layout } from "antd";

import styles from "./app.module.css"
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
                        <Route element={<ProductContextOutlet />}>

                            <Route path="/products" element={<OurProducts />} />
                            <Route path="/shopping-cart" element={<ShoppingCart />} />
                        </Route >

                    </Routes>
                </main>
            </div>
            <Footer className={styles.footer} />


        </>
    )
}
export default App;
