import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { FormWrapper, Wrapper, Modal } from './styles';

const { Title, Text } = Typography;

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isModalClick, setIsModalClick] = useState(false);
  return (
    <Wrapper isHidden={isModalClick}>
      {/* sign in */}
      <Modal onClick={() => setIsModalClick(true)} />
      <FormWrapper signIn={isSignIn}>
        <div className="title-wrapper">
          <Title
            className="sign-in-title"
            level={2}
            onClick={() => setIsSignIn(!isSignIn)}
          >
            Đăng Nhập
          </Title>
          <Title
            className="sign-up-title"
            level={2}
            onClick={() => setIsSignIn(!isSignIn)}
          >
            Đăng Ký
          </Title>
        </div>
        {isSignIn ? (
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
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Form name="register" className="register-form" scrollToFirstError>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'Định dạng E-mail chưa đúng!',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập trường này!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập trường này!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại mật khẩu"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập trường này!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('Mật khẩu không trùng khớp')
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
        )}

        <div className="other">
          <Text className="text-middle">Hoặc</Text>
          <Button size="large" type="priamry">
            Đăng nhập bằng Google
          </Button>
        </div>
      </FormWrapper>

      {/* sign up */}
    </Wrapper>
  );
}
