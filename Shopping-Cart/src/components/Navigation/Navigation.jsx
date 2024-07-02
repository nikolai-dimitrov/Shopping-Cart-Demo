import React from 'react';
import { useState } from 'react'


import { Link } from 'react-router-dom'


import {
    HomeOutlined,
    ProductOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';

import { useLocalStorage } from '../../hooks/useLocalStorage'
import styles from './navigation.module.css'
const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: (
            <Link to="/">Home</Link>
        ),
    },


    {
        key: '2',
        icon: <ProductOutlined />,
        label: (
            <Link to="products">Products</Link>

        ),
    },

    {
        key: '3',
        icon: <ShoppingCartOutlined />,
        label: (
            <Link to="/shopping-cart">Shopping Cart</Link>
        )

    },

];
export const Navigation = () => {
    const [persistedPageKey, setStateLocalStorage] = useLocalStorage('currentPage', 1)
    const persistKeyLocalStorage = (item) => {
        const { key } = item
        setStateLocalStorage(key)
    }
    return (
        <>
            <nav className={styles.nav__wrapper}>
                <Menu
                    style={{
                        itemBg: "f0000000",
                    }}
                    defaultSelectedKeys={[`${persistedPageKey}`]}
                    defaultOpenKeys={['sub1']}
                    theme='light'
                    items={items}
                    className={styles.nav}
                    onClick={(item, key) => persistKeyLocalStorage(item, key)}
                />
            </nav>
        </>
    )
}
