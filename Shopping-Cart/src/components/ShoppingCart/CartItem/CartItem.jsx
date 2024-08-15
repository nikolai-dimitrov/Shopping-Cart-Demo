
import styles from './cart-item.module.css';
export const CartItem = ({ product, removeFromCartHandler }) => {
    return (
        <>
            <div>
                <p>{product.item}</p>
                <button className={styles.testBtn} onClick={() => removeFromCartHandler(product)}>
                    Remove
                </button>
            </div>
        </>
    )

}