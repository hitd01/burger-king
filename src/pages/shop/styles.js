import styled from 'styled-components';
import { Button } from 'antd';
import MaskGroup from '../../assets/images/Mask-Group-1.jpg';
import Banner from '../../assets/images/menubanner.png';

export const BannerWrapper = styled.div`
  background: url(${MaskGroup}) no-repeat center;
  background-size: cover;
  height: 100vh;
  margin-bottom: 70px;
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
      .home-shop {
        a {
          color: white;
          font-size: 25px;
        }
      }
      .title {
        text-transform: uppercase;
        font-size: 68px;
        font-weight: bold;
        margin-bottom: 15px;
        color: var(--white-color);
        text-align: center;
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
        font-size: 58px;
      }
      .content {
        max-width: 600px;
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 767.5px) {
    .banner .content-wrapper {
      .title {
        font-size: 48px;
      }
      .content {
        max-width: 500px;
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 575.5px) {
    .banner {
      padding: 0 20px;
      .content-wrapper {
        .home-shop {
          a {
            color: white;
            font-size: 18px;
          }
        }
        .title {
          font-size: 38px;
        }
        .content {
          max-width: 350px;
          font-size: 16px;
        }
      }
    }
  }
`;

export const ButtonStyled = styled(Button)`
  font-size: 32px;
  height: 60px;
  width: 218px;
  display: block;
  line-height: 50px;
  font-weight: bold;
  background-color: #fbb731;
  color: var(--white-color);

  border-radius: 15px;
  margin-top: 35px;
  &-sm {
    border-radius: 0;
  }
`;
export const ButtonStyled1 = styled(Button)`
  font-size: 20px;
  height: 60px;
  width: 218px;
  display: block;
  line-height: 50px;
  font-weight: bold;
  background-color: #fbb731;
  color: #0f3d64;

  border-radius: 15px;
  margin-top: 35px;
  &-sm {
    border-radius: 0;
  }
`;
export const NewProductsWrapper = styled.div`
  padding-top: 150px;

  background: url(${Banner}) no-repeat center;
  height: 80vh;

  .title-banner {
    color: white;
    height: 300px;
    width: 100%;
    margin-left: 90px;
    margin-top: 50px;
    .sale {
      background-color: #ffa27e;
      border-radius: 25px;
      width: 91px;
      height: 46px;
      font-size: 25px;
      font-weight: bold;
    }
    h1 {
      color: white;
      font-size: 50px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    span {
    }
  }
`;
export const BlogsRecentlyWrapper = styled.div`
  .title-wrapper {
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: #0f3d64;
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
        height: 416px;
        object-fit: cover;
      }
      cursor: pointer;
    }
    .info-wrapper {
      background-color: white;
      padding: 24px;
      margin-top: 111px;

      .title {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #0f3d64;
        display: block;
      }
      .description {
        font-size: 18px;

        color: #ffa27e;
        font-weight: 600;
        text-align: center;
        display: block;
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
  @media screen and (max-width: 575.5px) {
    .title-wrapper {
      padding-left: 8px;
      padding-right: 8px;
      h4.ant-typography {
        font-size: 42px;
      }
    }
  }
`;
