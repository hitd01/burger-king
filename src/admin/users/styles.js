import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 20px 32px 0;
  .top-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ant-typography {
      color: var(--text-primary);
      text-transform: uppercase;
    }
  }
`;
