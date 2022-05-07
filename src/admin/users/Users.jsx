import React, { useState } from 'react';
import { Wrapper } from './styles';
import { Typography } from 'antd';
import { UserAdmin, EditUserAdmin } from '../../admin_components';

const { Title } = Typography;

const Users = () => {
  const [selected, setSelected] = useState('user');

  return (
    <Wrapper>
      {selected === 'user' ? (
        <>
          <div className="top-title">
            <Title level={4}>Danh sách người dùng</Title>
          </div>
          <UserAdmin />
        </>
      ) : null}
      {selected === 'edit-user' ? <EditUserAdmin /> : null}
    </Wrapper>
  );
};

export default Users;
