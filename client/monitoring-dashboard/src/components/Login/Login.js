import React, {useState} from 'react';
import { Form, Input, Button, Checkbox, Typography, Alert } from 'antd';
import { useHistory } from "react-router-dom";
import Icon from './Assets/Img/Icon.png';
import './style.css';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../config/UserPool';
import {myStyle} from '../../constants/constants';

function LoginPage() {

    const [show, setShow] = useState(false);
    let history = useHistory();
    const { Title } = Typography;

    const handleClose = () => {
        setShow(false)
    }
    
    const onFinish = (values) => {
        console.log('Success:', values);
        const user = new CognitoUser({
            Username: values.username,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: values.username,
            Password: values.password,
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                history.push('/dashboard/' + values.username);
            },
            onFailure :(err) => {
                setShow(true);
            },

        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={myStyle}>
            { show ? (
                <Alert message="Wrong credentials" type="error" showIcon closable afterClose={handleClose} />
            ) : ''}
            <div  className='wrapper'>
                <div className='wrapper_space'/>
                <div className='wrapper_form'>
                    <div className='wrapper_form_input'>
                        <div className='IconImg'>
                            <img src={Icon}/>
                        </div>
                        <div className='wrapper_form_header'>
                            <Title strong level={3}>Sign in to your account</Title>
                        </div>
                        <Form
                        className='wrapper_ant_form'
                            name="basic"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                requiredMark={'optional'}
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input bordered={false}/>
                            </Form.Item>
                            <Form.Item
                            
                                requiredMark={'optional'}
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password bordered={false}/>
                            </Form.Item>
                            <div >
                                <Form.Item
                                    className='wrapper_inner'
                                    name="remember"
                                    valuePropName="checked"
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit"  shape="round" block>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;