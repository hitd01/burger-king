import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  height: 110px;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  .logo-wrapper {
    display: block;
    width: 80px;
    img {
      max-width: 100%;
    }
  }
  .link-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white-color);
    .ant-menu {
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: transparent;
      &-item {
        margin: 0 16px;
        padding: 0;
      }
      &-title-content a {
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        color: var(--white-color);
        &:hover {
          color: var(--primary-color);
        }
      }
      &-item-selected {
        background-color: transparent;
      }
    }
    .icon-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cart-wrapper {
        position: relative;
        color: var(--secondary-color);
        .quantity {
          position: absolute;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: var(--secondary-color-light);
          font-size: 14px;
          top: -5px;
          right: -10px;
          text-align: center;
          line-height: 25px;
        }
      }
      .icon {
        margin-left: 32px;
      }
      .anticon {
        font-size: 30px;
        color: var(--white-color);
        &-shopping {
          color: var(--secondary-color);
        }
        &-bars {
          display: none;
          font-size: 36px;
        }
        &-close {
          font-size: 36px;
        }
        &-search {
          cursor: pointer;
        }
      }
      .search-wrapper {
        position: relative;
        .ant-input {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 20px;
          min-width: 50vw;
          padding: 6px 12px;
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 991.5px) {
    .link-wrapper {
      .ant-menu {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        top: 110px;
        right: ${({ toggleMenu }) => (toggleMenu ? 0 : '-110%')};
        opacity: 1;
        transition: all 0.5s ease;
        width: 100vw;
        height: auto;
        background-color: var(--primary-color-dark);
        z-index: 100;
        &-item {
          padding: 0;
          height: auto;
          width: 100%;
        }
        &-title-content a {
          font-size: 24px;
          display: block;
        }
      }
      .icon-wrapper {
        .anticon-bars {
          display: block;
        }
      }
    }
  }
  @media screen and (max-width: 575.5px) {
    padding: 0 20px;
    .link-wrapper {
      .icon-wrapper {
        .search-wrapper {
          .ant-input {
            right: -100%;
          }
        }
      }
    }
  }
`;
