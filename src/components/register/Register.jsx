import { Link, Navigate } from 'react-router-dom';
import './register.scss';
import {
    Button,
    Checkbox,
    Form,
    Input,
} from 'antd';
import { appRouter } from '../const/router.const';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../stores/action/auth.action';
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 24,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function Register() {
    const dispatch = useDispatch();
    const isUser = useSelector(state => state.auth.isRegistered);
    const [inputRegister, setInputRegister] = useState({
        email: '',
        userName: '',
        password: '',

    })
    const [form] = Form.useForm();

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setInputRegister({
            ...inputRegister,
            [name]: value,
        })
    }

    const { email, userName, password } = inputRegister;
    const onFinish = () => {
        dispatch(
            registerAction({
                email: email,
                userName: userName,
                password: password
            })
        )
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    if (isUser) return <Navigate to={appRouter.login} />
    return (
        <div className="register-container">
            <div className="register">
                <h3 className='title-register'>Đăng ký</h3>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    scrollToFirstError
                    className='form-register'
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Email không hợp lệ!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập Emal!',
                            },
                        ]}
                    >
                        <Input placeholder='Email' name='email' onChange={handleRegisterChange} />
                    </Form.Item>
                    <Form.Item
                        name="nickname"
                        tooltip="What do you want others to call you?"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập Họ tên!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder='Họ tên' name='userName' onChange={handleRegisterChange} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder='Mật khẩu' />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Hai mật khẩu không khớp!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder='Xác nhận mật khẩu' name='password' onChange={handleRegisterChange} />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Hãy chấp nhận điều khoản')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            Tôi đã đọc  <a href="">điều khoản</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className='register-submit' htmlType="submit">
                            Đăng Ký
                        </Button>
                    </Form.Item>
                </Form>
                <span>Bạn đã có tài khoản? <Link to={appRouter.login}>Đăng nhập!</Link></span>
            </div>
        </div>
    );
}

export default Register;