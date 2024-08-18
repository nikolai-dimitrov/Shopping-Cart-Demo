import { useState, useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import { CartItem } from './CartItem/CartItem'
import { Reveal } from '../Reveal/Reveal'
import {

    ShoppingCartOutlined,
    CarOutlined
} from '@ant-design/icons'
import { Flex, Progress } from 'antd';
import styles from './shopping-cart.module.css'
export const ShoppingCart = () => {
    const { cartProducts, removeFromCartHandler } = useContext(ProductContext);

    // Create object with key:productId , initialValue: '1' for all products in the cart than pass it as initial state.
    let quantityInitialState = Object.fromEntries(cartProducts.map((el) => ([el._id, '1'])))
    const [quantity, setQuantity] = useState(quantityInitialState)

    const productQuantityHandler = (productId, operation) => {
        setQuantity((quantity) => {
            let quantityNumber = Number(quantity[productId])
            if (quantityNumber <= 1 && operation == 'decrement') {
                quantityNumber += 1
            }
            operation == 'increment' ? quantityNumber += 1 : quantityNumber -= 1
            return ({
                ...quantity,
                [productId]: quantityNumber,
            })
        })
    }

    let subTotalPrice = 0;
    cartProducts.forEach((el) => subTotalPrice += el.price * quantity[el._id]);
    const salesTax = subTotalPrice * 0.1;
    const shippingTax = 50
    let grandTotalPrice = subTotalPrice + salesTax + shippingTax;

    const freeShippingPercent = ((grandTotalPrice - shippingTax) / 5000) * 100;
    freeShippingPercent >= 100 ? grandTotalPrice -= shippingTax : grandTotalPrice;
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
                        {cartProducts.map(product => (<CartItem key={product._id} product={product} productQuantity={quantity[product._id]} productQuantityHandler={productQuantityHandler} removeFromCartHandler={removeFromCartHandler} />))}
                    </div>
                    <div className={styles.checkOutContainer}>
                        <div className={styles.description}>
                            <p>Subtotal: <span>${subTotalPrice}</span> </p>
                            <div className={styles.shippingTaxContainer}>
                                <p className={styles.shippingTax}>Shipping Tax: <span>$50</span> </p>
                                <div className={freeShippingPercent >= 100 ? `${styles.crossLine} ${styles.showLine}` : `${styles.crossLine}`}></div>
                            </div>
                            <p className={styles.salesTax}>Sales Tax: <span>${salesTax}</span> </p>
                            <p className={styles.grandTotalPrice}>Grand Total: <span>${grandTotalPrice}</span> </p>
                        </div>
                        <div className={styles.message}>
                            {grandTotalPrice >= 5000 ? <p>Congrats, you are eligible for <span>Free Shipping</span></p> : <p>Sorry, you aren't eligible for <span>Free Shipping</span></p>}
                            <CarOutlined className={styles.carIcon} />
                        </div>
                        <span></span>
                        <Flex
                            vertical
                            gap="small"
                            className={styles.progressContainer}

                        >
                            <Progress percent={freeShippingPercent} size="active" showInfo={false} />
                        </Flex>

                        <button className={styles.checkOutBtn}>Check out</button>
                    </div>

                </>
            }
        </section >
    )
}
