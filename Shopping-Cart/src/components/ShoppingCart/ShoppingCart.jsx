import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { usePopup } from '../../hooks/usePopup'

import { CartItem } from './CartItem/CartItem'
import { DeliveryModal } from './DeliveryModal/DeliveryModal'
import { Popup } from '../Popup/Popup'

import { Button, Result } from 'antd';
import {

    ShoppingCartOutlined,
    CarOutlined
} from '@ant-design/icons'
import { Flex, Progress } from 'antd'
import styles from './shopping-cart.module.css'
export const ShoppingCart = () => {
    const { cartProducts, removeFromCartHandler, successOrderHandler } = useContext(ProductContext);

    // Create object with key:productId , initialValue: '1' for all products in the cart than pass it as initial state.
    let quantityInitialState = Object.fromEntries(cartProducts.map((el) => ([el._id, '1'])))
    const [quantity, setQuantity] = useState(quantityInitialState)

    const [deliveryModalStatus, setDeliveryModalStatus] = useState(false)
    const [showResultModal, setShowResultModal] = useState(false)
    const [popupState, showPopupHandler] = usePopup()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [deliveryModalStatus]);

    const productQuantityHandler = (productId, operation) => {
        setQuantity((quantity) => {
            let quantityNumber = Number(quantity[productId])
            operation == 'increment' ? quantityNumber += 1 : quantityNumber -= 1
            return ({
                ...quantity,
                [productId]: quantityNumber,
            })
        })
    };

    const successOrder = () => {
        successOrderHandler()
        setShowResultModal((showResultModal) => true)
    }

    // Closes both (DeliveryModal and ResultModal) section.
    const closeModalHandler = () => {
        setDeliveryModalStatus(false)
        setShowResultModal(false)
    };

    // Export in independent function (util)
    let subTotalPrice = 0;
    cartProducts.forEach((el) => subTotalPrice += el.price * quantity[el._id]);
    const salesTax = subTotalPrice * 0.1;
    const shippingTax = 50;
    let grandTotalPrice = subTotalPrice + salesTax + shippingTax;

    const freeShippingPercent = ((grandTotalPrice - shippingTax) / 5000) * 100;
    freeShippingPercent >= 100 ? grandTotalPrice -= shippingTax : grandTotalPrice;

    return (
        <>

            {showResultModal ?
            // Successful order result modal
                <Result
                    status="success"
                    title="Successfully Purchased Cloud Server ECS!"
                    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                    extra={[
                        <Button type="primary" key="console">
                            Products
                        </Button>,
                        <Button key="buy" onClick={closeModalHandler}>Cart</Button>,
                    ]}
                />
                : <div className={styles.cartContainer}>
                    <section className={cartProducts.length > 0 ? `${styles.shoppingCart} ${deliveryModalStatus ? `${styles.hideProductSection}` : `${styles.showProductSection}`}` : `${styles.shoppingCart} ${styles.emptyCardLayout}`}>
                        {cartProducts.length == 0 ?
                            // Cart page when there aren't any products there.
                            <div className={styles.iconContainer}>
                                <div className={styles.innerIconContainer}>
                                    <h1 className={styles.heading}>Your cart is empty.</h1>
                                    <ShoppingCartOutlined className={styles.icon} />
                                </div>
                            </div> :
                            // Cart page when there are products there.
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
                                    {cartProducts.map(product => (<CartItem key={product._id} product={product} productQuantity={quantity[product._id]} productQuantityHandler={productQuantityHandler} removeFromCartHandler={removeFromCartHandler} showPopupHandler={showPopupHandler} />))}
                                </div>
                                {/* Check out bottom section */}
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

                                    <button className={styles.checkOutBtn} onClick={() => setDeliveryModalStatus(deliveryModalStatus => true)}>Check out</button>
                                </div>
                            </>
                        }
                    </section >
                    <DeliveryModal showModal={deliveryModalStatus} closeModalHandler={closeModalHandler} successOrder={successOrder} />
                </div>
            }
            <Popup {...popupState} />

        </>

    )
}
