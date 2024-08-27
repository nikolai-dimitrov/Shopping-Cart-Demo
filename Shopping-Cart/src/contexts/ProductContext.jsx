import { createContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useLocalStorage('cartProducts', []);

    const addToCartHandler = (currentProduct) => {
        const existingProduct = cartProducts.filter(i => i._id == currentProduct._id);
        if (existingProduct.length > 0) {
            throw new Error(`You have already added ${currentProduct.item}`);
        } else {
            const calculatedState = [...cartProducts, currentProduct];
            setCartProducts(calculatedState);
        }
    }

    const removeFromCartHandler = (currentProduct) => {
        const calculatedState = cartProducts.filter(p => p._id != currentProduct._id);
        setCartProducts(calculatedState);
    }

    const successOrderHandler = () => {
        setCartProducts((cartProducts) => []);
        localStorage.removeItem('cartProducts');
    }

    const productContextValues = {
        addToCartHandler,
        removeFromCartHandler,
        successOrderHandler,
        cartProducts,
    }

    return (
        <ProductContext.Provider value={productContextValues}>
            {children}
        </ProductContext.Provider>
    )
}