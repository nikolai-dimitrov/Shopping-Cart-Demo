import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { splitArrayToSubArrays } from '../utils/splitArrayToSubArrays';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cartProducts, setCartProducts] = useLocalStorage('cartProducts', []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/jsonstore/electronics`)
            .then(response => response.json())
            .then(data => {
                // Create matrix with arrays with max 9 elements for every page.
                // Products for every page is sub array.
                const nestedArrays = splitArrayToSubArrays(Object.values(data));
                setProducts(nestedArrays);
                setIsLoading(false);
            })
            .catch(error => console.log(error.message));
    }, [])

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
        products,
        isLoading,
    }

    return (
        <ProductContext.Provider value={productContextValues}>
            {children}
        </ProductContext.Provider>
    )
}