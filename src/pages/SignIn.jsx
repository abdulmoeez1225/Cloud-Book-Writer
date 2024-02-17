import React, { useEffect } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { signInApi } from '../api';
import { useGlobalStore } from '../store';
const SignIn = () => {
const {token,setToken} = useGlobalStore()
const navigation =useNavigate()

useEffect(()=>{
if(token){
  navigation('/book-list')
}
},[token])

const onFinish = (values) => {
  
  
  signInApi(values).then(res =>{
    setToken(res.accessToken)
    navigation('/book-list')
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }


  const validateMessages = {
    required: '${label} is required!',
    types: {
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
          <Typography.Title style={{ margin: 0, textAlign: 'center', padding: 10 }}>
            Sign In
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

            <Form.Item name={'email'} label="Email" rules={[{ required: true, type: 'email' }]}>
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

            <div style={{ justifyContent: 'center', display: 'flex', padding: 10 }}>
              <Link to={'/signup'}>Already have an account</Link>
            </div>

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

export default SignIn