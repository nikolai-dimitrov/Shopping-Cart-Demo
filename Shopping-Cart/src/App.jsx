import { useState, useEffect } from "react";
import styles from "./app.module.css"

function App() {
    const [isHidden, setIsHidden] = useState(false)
    return (
        <>
            <div>

                {isHidden ? <p>Hidden</p> : <Counter />}
                {/* {isHidden ? <p><Counter /></p> : <div><Counter /></div>} */}

                <input
                    type="checkbox"
                    checked={isHidden}
                    onChange={
                        (e) => {
                            setIsHidden(e.target.checked);
                        }
                    }
                />

                <Counter />
            </div>
        </>
    )
}

function Counter({
    isHidden
}) {
    const [count, setCount] = useState(0);
    const [hideEl, setHideEl] = useState(false);

    const increaseCounterHandler = () => {
        setCount(count => count += 1)
    };

    return (
        <>
            <div className={hideEl ? styles.hideElement : ''}>
                <p>Count: {count}</p>
                <button onClick={increaseCounterHandler} className={styles.btn__red}>Increase</button>
            </div>
            <button onClick={() => setHideEl(hideEl => !hideEl)}>{hideEl ? 'Show' : 'Hide'}</button>
        </>

    )
}
export default App;
