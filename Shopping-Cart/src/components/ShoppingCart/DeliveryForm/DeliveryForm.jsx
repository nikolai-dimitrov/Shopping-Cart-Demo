import React from 'react';
import { validators } from '../../../validators/validators';
import { Form, Input } from 'antd';
import styles from './delivery-form.module.css';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },

};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },


};



export const DeliveryForm = ({
    closeModalHandler,
    successOrder
}) => {
    const onFinish = () => {
        successOrder();
    };

    return (
        <Form
            {...layout}
            layout='vertical'
            name="nest-messages"
            onFinish={onFinish}
            className={styles.deliveryForm}
            validateMessages={validateMessages}

        >
            <Form.Item
                name={'firstName'}
                label="First Name"
                rules={[
                    {
                        required: true,
                    },
                    {
                        validator: validators.minLenValidator('First Name should be at least 2 characters long.')
                    },

                    {
                        validator: validators.nameValidator('Invalid name.')
                    },
                    {
                        validator: validators.whiteSpaceValidator('Field should contain characters instead of white spaces.')
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'lastName'}
                label="Last Name"
                rules={[
                    {
                        required: true,
                    },
                    {
                        validator: validators.minLenValidator('Last Name should be at least 2 characters long.')

                    },
                    {
                        validator: validators.nameValidator('Invalid name')
                    },
                    {
                        validator: validators.whiteSpaceValidator('Field should contain characters instead of white spaces.')
                    },

                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'email'}
                label="Email"
                rules={[
                    {

                        required: 'true',
                    },
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Country'}
                label="Country"
                rules={[
                    {

                        required: 'true',
                    },
                    {
                        validator: validators.minLenValidator('Country should be at least 2 characters long.')

                    },
                    {
                        validator: validators.whiteSpaceValidator('Field should contain characters instead of white spaces.')
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'City'}
                label="City"
                rules={[
                    {

                        required: 'true',
                    },
                    {
                        validator: validators.minLenValidator('City should be at least 2 characters long.')

                    },
                    {
                        validator: validators.whiteSpaceValidator('Field should contain characters instead of white spaces.')
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Zip Code'}
                label="Zip Code"
                rules={[
                    {

                        required: 'true',
                    },
                    {
                        validator: validators.minLenValidator('Zip Code should be at least 2 characters long.'),

                    },
                    {
                        validator: validators.maxLenValidator('Zip Code should be less than 20 characters long.')

                    },
                    {
                        validator: validators.whiteSpaceValidator('Field should contain characters instead of white spaces.')
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Address'}
                label="Address"
                rules={[
                    {

                        required: 'true',
                    },
                    {
                        validator: validators.minLenValidator('Address should be at least 5 characters long.')

                    },
                    {
                        validator: validators.whiteSpaceValidator('Field should contain characters instead of white spaces.')
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={'Additional Information'} label="Additional Information">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                }}
            >
                <div>
                    <button className={styles.deliveryBtn}>
                        Finish Order
                    </button>
                    <button className={styles.deliveryBtn} onClick={closeModalHandler} type="button">
                        Back
                    </button>
                </div>
            </Form.Item>
        </Form>
    )
}