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
        <section className={styles.shoppingCart}>
            {cartProducts.length == 0 ? <div className={styles.iconContainer}>
                <div className={styles.innerIconContainer}>
                    <h1 className={styles.heading}>Your cart is empty.</h1>
                    <ShoppingCartOutlined className={styles.icon} />
                </div>
            </div> :
                <div>
                    {cartProducts.map(product => (<CartItem key={product._id} product={product} removeFromCartHandler={removeFromCartHandler} />))}
                </div>
            }
        </section>
    )
}
