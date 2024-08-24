import { useState, useEffect } from 'react';
import { notification } from 'antd';

import styles from './popup.module.css'
export const Popup = ({ status, timesOpened, message, description }) => {
    const [api, contextHolder] = notification.useNotification();

    const showNotification = (status, message, description) => {
        if (status) {
            api[`${status}`]({
                message: message,
                description: description,
                showProgress: true,
                pauseOnHover: true,
            })
        }

    }
    useEffect(() => {
        showNotification(status, message, description)
    }, [timesOpened])

    return (
        <>
            {contextHolder}
        </>
    )
}