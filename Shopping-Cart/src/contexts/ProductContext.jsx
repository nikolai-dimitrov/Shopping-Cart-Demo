import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useLocalStorage('cartProducts', []);


    const addToCartHandler = (currentProduct) => {
        const existingProduct = cartProducts.filter(i => i._id == currentProduct._id);
        if (existingProduct.length > 0) {
            throw new Error('This product has already been added!')
        } else {
            const calculatedState = [...cartProducts, currentProduct];
            setCartProducts(calculatedState);
        }


    }

    const removeFromCartHandler = (currentProduct) => {
        const calculatedState = cartProducts.filter(p => p._id != currentProduct._id);
        setCartProducts(calculatedState);
    }


    const testValue = 5
    const productContextValues = {
        addToCartHandler,
        removeFromCartHandler,
        cartProducts,
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