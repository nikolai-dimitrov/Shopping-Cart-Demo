import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import { Reveal } from '../Reveal/Reveal';
import {

    ShoppingCartOutlined
} from '@ant-design/icons';
import styles from './shopping-cart.module.css'
export const ShoppingCart = () => {
    const { testValue } = useContext(ProductContext)
    return (
        <section className={styles.shoppingCart}>

            <div className={styles.iconContainer}>
                <div className={styles.innerIconContainer}>
                    <h1 className={styles.heading}>Your cart is empty.</h1>
                    <ShoppingCartOutlined className={styles.icon} />
                </div>
            </div>

        </section>
    )
}
