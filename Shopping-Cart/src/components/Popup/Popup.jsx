import { useEffect } from 'react';

import { notification } from 'antd';

export const Popup = ({ currentStatus, timesOpened, message, description }) => {
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
    useEffect(() => {
        showNotification(currentStatus, message, description);
    }, [timesOpened]);

    return (
        <>
            {contextHolder}
        </>
    )
}