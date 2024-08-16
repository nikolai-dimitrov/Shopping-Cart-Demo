import { useState } from 'react';
import styles from './cart-item.module.css';
export const CartItem = ({ product, removeFromCartHandler }) => {
    const [productQuantity, setProductQuantity] = useState(1)
    const incrementQuantity = () => {
        setProductQuantity(productQuantity + 1)
    }
    const decrementQuantity = () => {
        setProductQuantity(productQuantity - 1)

    }
    const totalPrice = productQuantity * product.price
    return (
        <>
            <article className={styles.card}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={product.imageUrl} alt="" />
                    </div>
                    <div className={styles.description}>
                        <h1 className={styles.heading}>{product.item}</h1>
                        <h4>Capacity: {product.capacity}</h4>
                        <h4>USB Type: {product.usbType}</h4>
                        <p>Charger Included: {product.chargerIncluded}</p>
                    </div>
                </div>
                <p className={styles.price}>${product.price}</p>

                <div className={styles.quantityContainer}>
                    <button className={styles.leftSide} onClick={decrementQuantity}>
                        -
                    </button>
                    <p>{productQuantity}</p>
                    <button className={styles.rightSide} onClick={incrementQuantity}>
                        +
                    </button>
                </div>
                <div className={styles.totalPriceContainer}>
                    <span className={styles.totalPrice}>${totalPrice}</span>

                    <button className={styles.btn} onClick={() => removeFromCartHandler(product)}>
                        X
                    </button>
                </div>

            </article>
        </>
    )

}