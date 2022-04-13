import styled from 'styled-components';
import HamburgerBanner from '../../assets/images/hamburger-banner.jpg';
import { Button } from 'antd';

export const Wrapper = styled.div`
  background: url(${HamburgerBanner}) no-repeat center;
  background-size: cover;
  height: 100vh;
  position: relative;
  .banner {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding: 0 40px;
    .content-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .title {
        text-transform: uppercase;
        font-size: 80px;
        font-weight: bold;
        margin-bottom: 15px;
        color: var(--white-color);
      }
      .content {
        max-width: 800px;
        text-align: center;
        margin-bottom: 15px;
        font-size: 22px;
        color: var(--white-color);
      }
    }
    .anticon {
      font-size: 30px;
      color: var(--white-color);
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
  @media screen and (max-width: 991.5px) {
    .banner .content-wrapper {
      .title {
        font-size: 60px;
      }
      .content {
        max-width: 600px;
        font-size: 18px;
      }
    }
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  height: 110px;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  .logo-wrapper {
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
        margin: 0;
        .ant-menu-title-content a {
          font-size: 20px;
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
          color: var(--white-color);
          &:hover {
            color: var(--primary-color);
          }
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
      .anticon {
        padding-left: 32px;
        font-size: 30px;
        color: var(--white-color);
        &-shopping {
          color: var(--secondary-color);
        }
        &-bars {
          display: none;
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
        right: ${({ toggleMenu }) => (toggleMenu ? 0 : '-100%')};
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
          .ant-menu-title-content a {
            padding: 12px 0;
            font-size: 24px;
            display: block;
          }
        }
      }
      .icon-wrapper {
        .anticon-bars {
          display: block;
        }
      }
    }
  }
`;

export const ButtonStyled = styled(Button)`
  font-size: 20px;
  height: 60px;
  padding: 0 60px;
  line-height: 60px;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: 1px solid var(--primary-color);
  border-radius: 0;
  &-sm {
    border-radius: 0;
  }
`;

export const NewProductsWrapper = styled.div`
  padding-top: 150px;
  .title-wrapper {
    text-align: center;
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
    .ant-typography {
      font-size: 20px;
      color: var(--text-gray);
    }
  }
  .ant-col {
    .product-image-wrapper {
      height: 300px;
      width: 100%;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
    .info-wrapper {
      background-color: var(--secondary-color-light);
      padding: 24px;
      .info {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        color: var(--text-primary);
      }
      .footer {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rate {
          display: flex;
          font-size: 22px;
        }
        .icon-wrapper {
          display: flex;
          .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--white-color);
            font-size: 18px;
            cursor: pointer;
          }
          .shopping-cart {
            background-color: var(--primary-color-dark);
            margin-right: 10px;
          }
          .eye {
            background-color: var(--primary-color);
            margin-right: 10px;
          }
          .heart {
            background-color: var(--secondary-color);
          }
        }
      }
    }
  }
  .ant-btn {
    margin-top: 32px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 991.5px) {
    .title-wrapper {
      h4.ant-typography {
        font-size: 52px;
      }
      .ant-typography {
        font-size: 18px;
      }
    }
  }
`;

export const MenuListWrapper = styled.div`
  padding-top: 150px;
  .title-wrapper {
    text-align: center;
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
    .ant-typography {
      font-size: 20px;
      color: var(--text-gray);
    }
  }
  .ant-col {
    position: relative;
    &:hover img {
      opacity: 0.3;
    }
    &:hover .middle {
      opacity: 1;
    }
    img {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
    .middle {
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      .ant-typography {
        color: var(--text-primary);
        font-size: 30px;
        margin-bottom: 10px;
        font-weight: 600;
      }
    }
  }
  @media screen and (max-width: 991.5px) {
    .title-wrapper {
      h4.ant-typography {
        font-size: 52px;
      }
      .ant-typography {
        font-size: 18px;
      }
    }
  }
`;

export const BlogsRecentlyWrapper = styled.div`
  padding-top: 150px;
  .title-wrapper {
    text-align: center;
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
    .ant-typography {
      font-size: 20px;
      color: var(--text-gray);
    }
  }
  .ant-col {
    .blog-image-wrapper {
      height: 300px;
      width: 100%;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      cursor: pointer;
    }
    .info-wrapper {
      background-color: var(--secondary-color-light);
      padding: 24px;
      .title {
        font-size: 24px;
        font-weight: 600;
        color: var(--text-primary);
        display: block;
      }
      .description {
        font-size: 16px;
        color: var(--text-gray);
      }
    }
  }
  .ant-btn {
    margin-top: 32px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 991.5px) {
    .title-wrapper {
      h4.ant-typography {
        font-size: 52px;
      }
      .ant-typography {
        font-size: 18px;
      }
    }
  }
`;

export const FormContactWrapper = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 40px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
  }
  .description {
    font-size: 20px;
    color: var(--text-gray);
    margin-bottom: 10px;
  }
  .input-wrapper {
    position: relative;
    input {
      width: 500px;
      height: 48px;
      border: 2px solid var(--primary-color);
      border-radius: 20px;
      padding: 8px 12px;
      font-size: 18px;
    }
    .ant-btn {
      position: absolute;
      top: 0;
      right: 0;
      background-color: var(--primary-color);
      font-size: 22px;
      font-weight: 600;
      height: 48px;
      color: var(--text-primary);
      text-align: center;
      line-height: 48px;
      padding: 0 20px;
      border-color: var(--primary-color);
      border-radius: 0;
    }
    .ant-btn-sm {
      border-radius: 0;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

export const FooterWrapper = styled.div`
  padding-top: 150px;
  .top {
    background-color: var(--primary-color-dark);
    padding: 32px 0;
    position: relative;
    .logo-wrapper {
      display: flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 160px;
      height: 160px;
      align-items: center;
      left: 80px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .ant-row {
      h4.ant-typography {
        font-size: 24px;
        color: var(--white-color);
        text-transform: uppercase;
      }
      .ant-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        & a {
          color: var(--white-color);
          font-size: 18px;
        }
      }
      .contacts {
        .title {
          font-size: 16px;
          color: var(--white-color);
        }
        .description {
          font-size: 18px;
          font-weight: 600;
          color: var(--white-color);
        }
      }
      .phone {
        .ant-typography:not(:first-child) {
          color: var(--secondary-color);
          font-size: 18px;
        }
      }
    }
  }
  .license {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    background-color: var(--primary-color);
    font-size: 18px;
    color: var(--text-primary);
  }
`;
