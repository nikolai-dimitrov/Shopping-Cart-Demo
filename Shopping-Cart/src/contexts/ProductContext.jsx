import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addToCartHandler = (currentProduct) => {
        setCartProducts(cartProducts => [...cartProducts, currentProduct])
    }

    const testValue = 5
    const productContextValues = {
        addToCartHandler,
        testValue,
    }


    return (
        <ProductContext.Provider value={productContextValues}>
            {children}
        </ProductContext.Provider>
    )
}

export const ProductContextOutlet = () => {
    return (
        <ProductProvider>
            <Outlet />
        </ProductProvider>
    )
};