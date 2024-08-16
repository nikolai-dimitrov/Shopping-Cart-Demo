import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import { CartItem } from './CartItem/CartItem'
import { Reveal } from '../Reveal/Reveal'
import {

    ShoppingCartOutlined
} from '@ant-design/icons'

import styles from './shopping-cart.module.css'
export const ShoppingCart = () => {
    const { cartProducts, removeFromCartHandler } = useContext(ProductContext);
    return (
        <section className={cartProducts.length > 0 ? `${styles.shoppingCart}` : `${styles.shoppingCart} ${styles.emptyCardLayout}`}>
            {cartProducts.length == 0 ? <div className={styles.iconContainer}>
                <div className={styles.innerIconContainer}>
                    <h1 className={styles.heading}>Your cart is empty.</h1>
                    <ShoppingCartOutlined className={styles.icon} />
                </div>
            </div> :
                <>
                    <h1 className={styles.heading}>Your Cart ({cartProducts.length} items)</h1>
                    <div className={styles.table}>
                        <ul className={styles.container}>
                            <li>Item</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Total</li>
                        </ul>
                    </div>
                    <div className={styles.productCards}>
                        {cartProducts.map(product => (<CartItem key={product._id} product={product} removeFromCartHandler={removeFromCartHandler} />))}
                    </div>
                </>
            }
        </section>
    )
}
