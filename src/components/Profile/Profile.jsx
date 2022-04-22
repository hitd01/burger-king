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
} from 'antd';
import React, { useState } from 'react';
import { Wrapper } from './styles';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { checkLogged } from '../Login/loginSlice';
import { useNavigate } from 'react-router-dom';

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

  return (
    <Wrapper profileSelected={profileSelected}>
      <Row>
        <Col className="sidebar">
          <div className="top">
            <Avatar size="large">A</Avatar>
            <div className="name-wrapper">
              <Text>Name</Text>
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
                      value: 'Name',
                    },
                    {
                      name: ['address'],
                      value: 'Kiều Mai, Phú Diễn, Nam Từ Liêm, Hà Nội',
                    },
                    {
                      name: ['avatar'],
                      value: 'A',
                    },
                  ]}
                >
                  <Form.Item label="Email đăng nhập">
                    <Text className="email-value">email@gmail.com</Text>
                  </Form.Item>

                  <Form.Item name="username" label="Tên">
                    <Input />
                  </Form.Item>

                  <Form.Item name="address" label="Địa chỉ">
                    <Input />
                  </Form.Item>

                  <div className="avatar-edit">
                    <Form.Item name="avatar" label="Ảnh đại diện">
                      <Avatar size={60}>A</Avatar>
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
  );
};

export default Profile;
