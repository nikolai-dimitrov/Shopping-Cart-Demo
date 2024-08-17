// ReactJS
import React from 'react';
import { useState, useContext } from 'react'

import { Link, useLocation } from 'react-router-dom'
// Custom Components & context
import { ProductContext } from '../../contexts/ProductContext';

// Antd
import {
    HomeOutlined,
    ProductOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';

import { Menu } from 'antd';
// Utils & CSS
import styles from './navigation.module.css'


const pathMapper = {
    '/': '1',
    '/products': '2',
    '/shopping-cart': '3',
}

export const Navigation = () => {
    const { cartProducts } = useContext(ProductContext);


    const [navOpen, setNavOpen] = useState(false);
    const { pathname } = useLocation();
    const changeNavStatus = () => {
        setNavOpen(!navOpen)
    }

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
        {
            key: '4',
            label: (
                `${cartProducts.length}`
            ),
            className: cartProducts.length >= 1 ? `${styles.showCounter}` : `${styles.hideCounter}`,
        },


    ];
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.menuToggle} onClick={() => changeNavStatus()}>
                    <div className={styles.container}>
                        <span className={navOpen ? `${styles.lineTop} ${styles.spinTop}` : `${styles.lineTop}`}></span>
                        <span className={navOpen ? `${styles.lineBottom} ${styles.spinBottom}` : `${styles.lineBottom}`}></span>
                    </div>
                </div>

                <div className={navOpen ? `${styles.navMenuWrapper} ${styles.navToggle}` : `${styles.navMenuWrapper}`}>
                    <Menu
                        style={{
                            itemBg: "f0000000",
                        }}
                        selectedKeys={[`${pathMapper[pathname]}`]}
                        theme='light'
                        items={items}
                        className={navOpen ? `${styles.nav} ${styles.navOpen}` : `${styles.nav}`}
                        onClick={() => changeNavStatus()}
                    />
                </div>
            </nav>
        </>
    )
}
