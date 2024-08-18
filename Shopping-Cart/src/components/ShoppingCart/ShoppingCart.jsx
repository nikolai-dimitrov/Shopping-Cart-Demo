import { useState, useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import { CartItem } from './CartItem/CartItem'
import { Reveal } from '../Reveal/Reveal'
import {

    ShoppingCartOutlined
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
    let salesTax = subTotalPrice * 0.1;
    let grandTotalPrice = subTotalPrice + salesTax;
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
                            <p>Sales Tax: <span>${salesTax}</span> </p>
                            <p>Grand Total: <span>${grandTotalPrice}</span> </p>
                        </div>
                        {/* <Flex
                            vertical
                            gap="small"
                            style={{
                                width: 248,
                            }}
                        >
                            <Progress percent={30} size="small" />
                            <Progress percent={50} size="small" status="active" />
                            <Progress percent={70} size="small" status="exception" />
                            <Progress percent={100} size="small" />
                        </Flex> */}

                        <button className={styles.checkOutBtn}>Check out</button>

                    </div>

                </>
            }
        </section>
    )
}
