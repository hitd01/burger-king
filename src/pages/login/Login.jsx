import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { SignIn } from './styles';

const { Title } = Typography;

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      {/* sign in */}
      <SignIn>
        {isSignIn ? (
          <Title onClick={() => setIsSignIn(!isSignIn)}>Đăng nhập</Title>
        ) : (
          <Title onClick={() => setIsSignIn(!isSignIn)}>Đăng Ký</Title>
        )}
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập trường này!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập trường này!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>

          <Form.Item>
            <a className="login-form-forgot" href="">
              Quên mật khẩu?
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <div>Hoặc</div>
        <Button type="priamry">Đăng nhập bằng Google</Button>
      </SignIn>

      {/* sign up */}
    </div>
  );
}
