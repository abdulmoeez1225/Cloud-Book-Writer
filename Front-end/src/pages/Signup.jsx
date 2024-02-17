import React from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { signUpApi } from '../api';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigation = useNavigate()

    const onFinish = (values) => {
        signUpApi({...values,role:'collaborator'}).then(()=>{
            navigation('/signin')
        })
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    const validateMessages = {
        required: '${label} is required!',
        types: {
            username: '${label} is not a valid number!',
            email: '${label} is not a valid email!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    return (
        <Row align='middle' style={{ height: '100vh' }}>
            <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <div style={{ border: '1px solid grey', padding: 20 }}>
                    <Typography.Title  style={{ margin: 0, textAlign: 'center', padding: 10 }}>
                        Sign up
                    </Typography.Title>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        validateMessages={validateMessages}
                    >
                        <Form.Item name={ 'username'} label="Username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={ 'email'} label="Email" rules={[{ required: true , type: 'email' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                  

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>


        </Row>)
}

export default SignUp