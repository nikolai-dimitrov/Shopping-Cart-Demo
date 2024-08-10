import styles from './header.module.css'
export const Header = () => {
    return (
        <>
            <header>
                <div className={styles.heading__wrapper}>
                    <h1 className={styles.heading}>E-Store</h1>
                </div>
            </header>
        </>
    )
}