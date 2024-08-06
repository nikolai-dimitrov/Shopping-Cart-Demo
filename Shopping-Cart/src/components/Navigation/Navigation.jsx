import React from 'react';
import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import {
    HomeOutlined,
    ProductOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';

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

const pathMapper = {
    '/': '1',
    '/products': '2',
    '/shopping-cart': '3',
}

export const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { pathname } = useLocation();
    const changeNavStatus = () => {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <nav className={styles.nav__wrapper}>
                <div className={styles.menu__toggle} onClick={() => changeNavStatus()}>
                    <div className={styles.container}>
                        <span className={navOpen ? `${styles.lineTop} ${styles.spinTop}` : `${styles.lineTop}`}></span>
                        <span className={navOpen ? `${styles.lineBottom} ${styles.spinBottom}` : `${styles.lineBottom}`}></span>
                    </div>
                </div>
                <Menu
                    style={{
                        itemBg: "f0000000",
                    }}
                    // defaultSelectedKeys={['1']}
                    selectedKeys={[`${pathMapper[pathname]}`]}
                    theme='light'
                    items={items}
                    className={navOpen ? `${styles.nav} ${styles.nav__open}` : `${ styles.nav }`}
                />
            </nav>
        </>
    )
}
