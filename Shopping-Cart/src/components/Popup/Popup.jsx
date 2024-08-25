import { useEffect } from 'react';
import { notification } from 'antd';

import styles from './popup.module.css'
export const Popup = ({ currentStatus, timesOpened, message, description }) => {
    const [api, contextHolder] = notification.useNotification();

    const showNotification = (currentStatus, message, description) => {
        console.log(currentStatus)
        if (currentStatus) {
            api[`${currentStatus}`]({
                message: message,
                description: description,
                showProgress: true,
                pauseOnHover: true,
            })
        }

    }
    useEffect(() => {
        showNotification(currentStatus, message, description)
    }, [timesOpened])

    return (
        <>
            {contextHolder}
        </>
    )
}