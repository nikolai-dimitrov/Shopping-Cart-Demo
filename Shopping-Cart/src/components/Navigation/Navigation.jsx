import React from 'react';
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
        label: 'Home',
    },


    {
        key: '2',
        icon: <ProductOutlined />,
        label: 'Products',
    },

    {
        key: '3',
        icon: <ShoppingCartOutlined />,
        label: 'Shopping Cart',





    },

];
export const Navigation = () => {
    return (
        <>
            <nav>
                <Menu
                    style={{
                        width: 256,
                        itemBg: "f0000000",
                        // height: windowHeight - 62,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    theme='light'
                    items={items}
                    className={styles.nav}
                />
            </nav>
        </>
    )
}
