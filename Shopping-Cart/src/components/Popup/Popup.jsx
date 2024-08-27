import { useEffect } from 'react';

import { notification } from 'antd';

export const Popup = ({ currentStatus, triggerNotification, message, description }) => {
    const [api, contextHolder] = notification.useNotification();

    const showNotification = (currentStatus, message, description) => {
        if (currentStatus) {
            api[`${currentStatus}`]({
                message: message,
                description: description,
                showProgress: true,
                pauseOnHover: true,
            });
        };


    }

    // triggerNotification is only used to trigger useEffect and show the notification
    useEffect(() => {
        showNotification(currentStatus, message, description);
    }, [triggerNotification]);

    return (
        <>
            {contextHolder}
        </>
    )
}