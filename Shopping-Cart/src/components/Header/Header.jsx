import styles from './header.module.css';

export const Header = () => {
    return (
        <>
            <header>
                <div className={styles.headingWrapper}>
                    <h1 className={styles.heading}>E-Store</h1>
                </div>
            </header>
        </>
    )
}