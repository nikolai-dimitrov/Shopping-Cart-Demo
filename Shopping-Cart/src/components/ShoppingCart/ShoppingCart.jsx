import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import { Reveal } from '../Reveal/Reveal';

import styles from './shopping-cart.module.css'
export const ShoppingCart = () => {
    const { testValue } = useContext(ProductContext)
    return (
        <>
            <p>{testValue}</p>
            <div>Shopping Cart</div>
        </>
    )
}
