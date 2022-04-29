import {
  EditOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Menu,
  Row,
  Typography,
  Upload,
  Spin,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { Wrapper } from './styles';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from '../Login/loginSlice';
import { useNavigate } from 'react-router-dom';
import { getUsers } from './profileSlice';
import useAuth from '../../hooks/useAuth';

const { Text, Title } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [profileSelected, setProfileSelected] = useState(true);

  const handleSaveEditProfile = () => {};

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(checkLogged(false));
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const { currentUser } = useAuth();
  const { name, address, avatar, email } = currentUser;

  return (
    <>
      {loading === 'success' ? (
        <Wrapper profileSelected={profileSelected}>
          <Row>
            <Col className="sidebar">
              <div className="top">
                <Avatar size="large" src={avatar}>
                  {avatar ? '' : name?.charAt(0)?.toUpperCase()}
                </Avatar>
                <div className="name-wrapper">
                  <Text>{name}</Text>
                  <div
                    className="edit-wrapper"
                    onClick={() => setProfileSelected(true)}
                  >
                    <EditOutlined />
                    Sửa hồ sơ
                  </div>
                </div>
              </div>

              <div className="profile" onClick={() => setProfileSelected(true)}>
                <div className="title" onClick={() => setProfileSelected(true)}>
                  <UserOutlined />
                  <Text>Tài khoản của tôi</Text>
                </div>
                <Menu>
                  <Menu.Item key="profile">
                    <Text className="profile-info">Hồ sơ</Text>
                  </Menu.Item>
                  <Menu.Item key="change-password">
                    <Text>Đổi mật khẩu</Text>
                  </Menu.Item>
                </Menu>
              </div>
              <div className="shopping-history">
                <ShoppingOutlined />
                <Text>Đơn mua</Text>
              </div>
              <div className="logout" onClick={handleLogout}>
                <LogoutOutlined />
                <Text>Đăng xuất</Text>
              </div>
            </Col>

            <Col className="content">
              {profileSelected ? (
                <>
                  <Title className="title" level={2}>
                    Hồ Sơ Của Tôi
                  </Title>
                  <div className="form-wrapper">
                    <Form
                      form={form}
                      name="edit_profile_form"
                      className="forgot-password-form"
                      fields={[
                        {
                          name: ['username'],
                          value: name,
                        },
                        {
                          name: ['address'],
                          value: address,
                        },
                        {
                          name: ['avatar'],
                          value: avatar ? '' : name?.charAt(0)?.toUpperCase(),
                        },
                      ]}
                    >
                      <Form.Item label="Email đăng nhập">
                        <Text className="email-value">{email}</Text>
                      </Form.Item>

                      <Form.Item name="username" label="Tên">
                        <Input />
                      </Form.Item>

                      <Form.Item name="address" label="Địa chỉ">
                        <Input />
                      </Form.Item>

                      <div className="avatar-edit">
                        <Form.Item name="avatar" label="Ảnh đại diện">
                          <Avatar src={avatar} size={60}>
                            {avatar ? '' : name?.charAt(0)?.toUpperCase()}
                          </Avatar>
                        </Form.Item>

                        <Upload className="upload-btn-wrapper">
                          <Button icon={<UploadOutlined />}>
                            Tải lên ảnh đại diện
                          </Button>
                        </Upload>
                      </div>

                      <Form.Item>
                        <Button
                          size="large"
                          type="primary"
                          htmlType="submit"
                          className="save-button"
                          onClick={handleSaveEditProfile}
                        >
                          Lưu
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </>
              ) : null}
            </Col>
          </Row>
        </Wrapper>
      ) : (
        <Spin />
      )}
    </>
  );
};

export default Profile;
