import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #95c5f7;
  opacity: 0.3;
`;

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 20px;
  background-color: var(--primary-color-dark);
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2.ant-typography {
      text-align: center;
      width: 50%;
      padding: 12px 8px;
      cursor: pointer;
      margin: 0;
    }
    .sign-in-title {
      background: ${({ signIn }) => (signIn ? '#244263' : '#95c5f7')};
      border-top-left-radius: 20px;
      color: ${({ signIn }) => (signIn ? '#ffffff' : '#244263')};
    }
    .sign-up-title {
      background: ${({ signIn }) => (signIn ? '#95c5f7' : '#244263')};
      border-top-right-radius: 20px;
      color: ${({ signIn }) => (signIn ? '#244263' : '#ffffff')};
    }
  }
  .ant-form {
    padding: 20px 20px 0 20px;
    .login-form-button,
    .register-form-button {
      position: relative;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      min-width: 200px;
      background-color: var(--primary-color);
    }
    .ant-row {
      .ant-form-item-label {
        min-width: 150px;
        text-align: revert;
        label {
          color: var(--white-color);
        }
      }
    }
  }
  .other {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    .text-middle {
      font-size: 18px;
      color: var(--white-color);
      margin-bottom: 12px;
    }
  }
`;
