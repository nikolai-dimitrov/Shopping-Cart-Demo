import { Link } from "react-router-dom";

import styles from "./not-found.module.css";
export const NotFound = () => {
    return (
        <>
            <div className={styles.contentContainer}>
                <h1 className={styles.heading}>404</h1>
                <p className={styles.subHeading}>Page Not Found</p>
                <Link className={styles.btn} to="/">Go Home</Link>
            </div>
        </>
    )
}