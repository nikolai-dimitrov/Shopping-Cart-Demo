import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
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

const onFinish = (values) => {
    console.log(values);
};

export const DeliveryForm = ({ closeModalHandler }) => {
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
                    // {
                    //     validator(rule, value) {
                    //         return new Promise((resolve, reject) => {
                    //             if (value && value.length > 2) {
                    //                 resolve();
                    //             } else {
                    //                 reject('First Name must be greater than 2 characters.')
                    //             }
                    //         })
                    //     },
                    // },
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
                rules={[{

                    required: 'true',
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'City'}
                label="City"
                rules={[{

                    required: 'true',
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Zip Code'}
                label="Zip Code"
                rules={[{

                    required: 'true',
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'Address'}
                label="Address"
                rules={[{

                    required: 'true',
                }]}
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