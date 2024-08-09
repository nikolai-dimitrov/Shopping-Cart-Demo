import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import { Reveal } from '../Reveal/Reveal';

export const ShoppingCart = () => {
    const { testValue } = useContext(ProductContext)
    return (
        <>
            <p>{testValue}</p>
            <div>Shopping Cart</div>
        </>
    )
}
