import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px 40px 0;
  .sidebar {
    min-width: 240px;
    padding: 8px 0;
    .top {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .name-wrapper {
        flex: 1;
        margin-left: 15px;
        .ant-typography {
          font-size: 18px;
          color: var(--text-primary);
          font-weight: 600;
        }
        .edit-wrapper {
          font-size: 16px;
          color: var(--text-gray);
          cursor: pointer;
          .anticon-edit {
            margin-right: 4px;
          }
        }
      }
    }
    .profile {
      .title {
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: var(--text-primary);
        cursor: pointer;
        .ant-typography {
          margin-left: 4px;
        }
      }
      .ant-menu {
        border: none;
        &-item {
          .ant-typography {
            font-size: 18px;
            color: var(--text-gray);
          }
          .ant-typography.profile-info {
            color: ${({ profileSelected }) =>
              profileSelected ? 'var(--primary-color)' : 'var(--text-gray)'};
          }
        }
      }
    }
    .shopping-history {
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      color: var(--text-primary);
      cursor: pointer;
      .ant-typography {
        margin-left: 4px;
      }
    }
    .logout {
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      color: var(--text-primary);
      cursor: pointer;
      .ant-typography {
        margin-left: 4px;
      }
    }
  }
  .content {
    flex: 1;
    background: var(--secondary-color-light);
    box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
    padding: 8px 20px;
    .ant-form {
      .title {
        font-size: 28px;
        color: var(--text-primary);
        font-weight: 600;
      }
      .ant-row {
        .ant-form-item-label {
          label {
            min-width: 150px;
            font-size: 18px;
            color: var(--text-primary);
          }
        }
        .ant-form-item-control-input-content {
          .email-value {
            font-size: 16px;
            color: var(--text-primary);
          }
          .ant-input {
            color: var(--text-primary);
          }
        }
      }
      .ant-row:last-child {
        margin: 0;
        .ant-form-item-control-input-content {
          display: flex;
          justify-content: center;
          .save-button {
            min-width: 120px;
          }
        }
      }
    }
  }
`;
