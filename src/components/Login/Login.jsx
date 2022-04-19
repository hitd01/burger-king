import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { FormWrapper, Wrapper, Modal } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginSlice } from './loginSlice';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { addDocument } from '../../firebase/services';

const { Title, Text } = Typography;

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);

  const { isHiddenLogin } = useSelector((state) => state.login);

  // handle login with google
  const handleLoginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        const payload = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          accessToken: token,
        };

        addDocument('users', payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper isHidden={isHiddenLogin}>
      <Modal
        onClick={() => {
          dispatch(loginSlice.actions.toggleHiddenLogin(true));
          navigate(-1);
        }}
      />
      <FormWrapper signIn={isSignIn}>
        <div className="title-wrapper">
          <Title
            className="sign-in-title"
            level={2}
            onClick={() => setIsSignIn(true)}
          >
            Đăng Nhập
          </Title>
          <Title
            className="sign-up-title"
            level={2}
            onClick={() => setIsSignIn(false)}
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
              name="password-register"
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
              dependencies={['password-register']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập trường này!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      getFieldValue('passwopassword-registerrd2') === value
                    ) {
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
          <Button size="large" type="priamry" onClick={handleLoginWithGoogle}>
            Đăng nhập bằng Google
          </Button>
        </div>
      </FormWrapper>
    </Wrapper>
  );
}
