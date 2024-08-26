import { useState } from 'react';
import styles from './cart-item.module.css';
export const CartItem = ({ product,
    removeFromCartHandler,
    productQuantity,
    productQuantityHandler,
    showPopupHandler,
}) => {

    const incrementQuantity = () => {
        productQuantityHandler(product._id, 'increment')
        showPopupHandler({ currentStatus: 'warning', message: 'Increase quantity!', description: `You successfully increased quantity of ${product.item} by 1` })

    }

    const decrementQuantity = () => {
        productQuantityHandler(product._id, 'decrement')
        showPopupHandler({ currentStatus: 'warning', message: 'Decrease quantity!', description: `You successfully decreased quantity of ${product.item} by 1` })
    }

    const removeFromCart = (product) => {
        removeFromCartHandler(product)
        showPopupHandler({ currentStatus: 'success', message: 'Removed product!', description: `You successfully removed ${product.item} from cart` })
    }

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
                    <button className={styles.leftSide} onClick={decrementQuantity} disabled={productQuantity <= 1 ? true : false}>
                        -
                    </button>
                    <p>{productQuantity}</p>
                    <button className={styles.rightSide} onClick={incrementQuantity}>
                        +
                    </button>
                </div>
                <div className={styles.totalPriceContainer}>
                    <span className={styles.totalPrice}>${product.price * productQuantity}</span>

                    <button className={styles.btn} onClick={() => removeFromCart(product)}>
                        X
                    </button>
                </div>

            </article>
        </>
    )

}