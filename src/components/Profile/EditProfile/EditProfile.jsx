import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Typography, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { getADoc, uploadAvatar } from '../../../firebase/services';
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import useAuth from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import { db, storage } from '../../../firebase/config';
import { Wrapper } from './styles';
import { setLoadingProfile } from '../profileSlice';

const { Title, Text } = Typography;

const EditProfile = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { currentUserAuth } = useAuth();

  const { displayName, email, photoURL, uid } = currentUserAuth;
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    if (loading === 'success') {
      const user = users?.find((user) => user.uid === uid);
      const userSnap = getADoc('users', user?.id);
      userSnap
        .then((res) => setAddress(res?.data()?.address))
        .catch((err) => console.log(err));
    }
  }, []);

  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSaveEditProfile = async () => {
    const { username, address } = form.getFieldValue();
    const userSelected = await users?.find((user) => user.uid === uid);
    const userRef = doc(db, 'users', userSelected?.id);
    dispatch(setLoadingProfile('pending'));
    if (photo) {
      await uploadAvatar(photo);
    }
    if (username !== displayName) {
      updateProfile(currentUserAuth, { displayName: username });
    }
    if (userRef) {
      if (photo) {
        const photoURL = await getDownloadURL(
          ref(
            storage,
            `user-avatars/${uid}.${photo.type === 'image/png' ? 'png' : 'jpg'}`
          )
        );
        await updateDoc(userRef, {
          name: username?.trim(),
          address: address?.trim(),
          avatar: photoURL,
          updatedAt: serverTimestamp(),
        });
      } else {
        await updateDoc(userRef, {
          name: username?.trim(),
          address: address?.trim(),
          updatedAt: serverTimestamp(),
        });
      }
    }
    dispatch(setLoadingProfile('success'));
  };

  // handle upload file
  const beforeUpload = (file) => {
    if (file?.type !== 'image/png' && file?.type !== 'image/jpeg') {
      alert('File phải là hình ảnh .jpg hoặc .png');
    } else {
      setPhoto(file);
    }
    return false;
  };
  const uploadChange = (file) => {
    if (
      file.fileList[0]?.type !== 'image/png' &&
      file.fileList[0]?.type !== 'image/jpeg'
    ) {
      file.fileList.pop();
    }
  };

  return (
    <Wrapper>
      <Title className="title" level={2}>
        Hồ Sơ Của Tôi
      </Title>
      <div className="form-wrapper">
        <Form
          form={form}
          name="edit_profile_form"
          className="forgot-password-form"
          onFinish={handleSaveEditProfile}
          fields={[
            {
              name: ['username'],
              value: displayName ? displayName : email?.charAt(0).toUpperCase(),
            },
            {
              name: ['address'],
              value: address,
            },
          ]}
        >
          <Form.Item label="Email đăng nhập">
            <Text className="email-value">{email}</Text>
          </Form.Item>

          <Form.Item
            name="username"
            label="Tên"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="avatar-edit">
            <Form.Item name="avatar" label="Ảnh đại diện">
              <Avatar size={60} src={photoURL}>
                {photoURL
                  ? ''
                  : displayName
                  ? displayName?.charAt(0)?.toUpperCase()
                  : email?.charAt(0).toUpperCase()}
              </Avatar>
            </Form.Item>

            <Upload
              className="upload-btn-wrapper"
              maxCount={1}
              beforeUpload={beforeUpload}
              onChange={uploadChange}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Tải lên ảnh đại diện</Button>
            </Upload>
          </div>

          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="save-button"
            >
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};

export default EditProfile;
