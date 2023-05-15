import './login.scss';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import iconFacebook from '../../asset/icon-login/icons8-facebook-48.png';
import iconGoogle from '../../asset/icon-login/icons8-google-48.png'
import iconTwitter from '../../asset/icon-login/icons8-twitter-circled-48.png'
import { Link, Navigate } from 'react-router-dom';
import { appRouter } from '../const/router.const';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../stores/action/auth.action';
function Login() {
    const dispatch = useDispatch();
    const isUser = useSelector(state => state.auth.user)
    const [inputLogin, setInputLogin] = useState({
        email: '',
        password: '',
    });


    const handleLoginChange = (e) => {
        const { value, name } = e.target;
        setInputLogin({
            ...inputLogin,
            [name]: value,
        })
    }
    const { email, password } = inputLogin;


    const onFinish = () => {
        dispatch(
            loginAction({
                email: email,
                password: password
            })
        )
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    if (isUser) return <Navigate to={appRouter.home} />
    return (
        <div className="login-container">
            <div className="login">
                <h3 className='title-login'>Đăng nhập</h3>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập Email!',
                            },
                        ]}
                    >
                        <Input
                            onChange={handleLoginChange}
                            name='email'
                            prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input
                            onChange={handleLoginChange}
                            name='password'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Nhớ mật khẩu</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Quên mật khẩu
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType="submit" className="login-form-button">
                            Đăng Nhập
                        </Button>
                        <span>Hoặc</span> <Link to={appRouter.register}>Đăng ký! </Link>
                    </Form.Item>
                </Form>
                <p className='title-icon'>Hoặc sử dụng</p>
                <div className='icon-login'>
                    <img src={iconFacebook} alt="" />
                    <img src={iconTwitter} alt="" />
                    <img src={iconGoogle} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;