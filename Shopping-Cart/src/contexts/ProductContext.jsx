import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useLocalStorage('cartProducts', []);


    const addToCartHandler = (currentProduct) => {
        setCartProducts(currentProduct, 'add');

    }

    const removeFromCartHandler = (currentProduct) => {
        setCartProducts(currentProduct, 'remove');
    }


    const testValue = 5
    const productContextValues = {
        addToCartHandler,
        removeFromCartHandler,
        cartProducts,
        testValue,
    }

    // console.log(cartProducts, 'in context')
    let stringifiedState = JSON.stringify([
        ...cartProducts,
    ]);

    localStorage.setItem('cartProducts', stringifiedState);
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