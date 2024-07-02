import { Navigation } from "../Navigation/Navigation";
import styles from './header.module.css'
export const Header = () => {
    return (
        <>
            <h1 className={styles.heading}>Shopping</h1>
            <Navigation />
        </>
    )
}