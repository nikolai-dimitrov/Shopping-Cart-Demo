import { useState, useEffect } from "react";
import styles from "./app.module.css"
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
function App() {
    return (
        <>
            <Header />
            <main id="main">
                <Home />
            </main>
        </>
    )
}
export default App;
