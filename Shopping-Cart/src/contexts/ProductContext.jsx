import { createContext } from 'react'
import { Outlet } from 'react-router-dom';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const testValue = 5
    const productContextValues = {
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