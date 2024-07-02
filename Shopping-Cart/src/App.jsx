import { useState, useEffect } from "react";


import styles from "./app.module.css"
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { OurProducts } from "./components/OurProducts/OurProducts";


import { Layout } from "antd";
const { Footer } = Layout
function App() {
    return (
        <>
            <Header />
            <div className={styles.layout}>
                <Navigation />
                <main id="main">
                    <Home />
                    <OurProducts/>
                </main>
            </div>
            <Footer />


        </>
    )
}
export default App;
