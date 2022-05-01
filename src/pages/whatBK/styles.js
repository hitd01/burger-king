import styled from 'styled-components';
import AboutUsBanner from '../../assets/images/AboutUs-banner.jpg';
import { Button } from 'antd';

export const BannerWrapper = styled.div`
  background: url(${AboutUsBanner}) no-repeat center;
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
      .home-about {
        a {
          color: white;
          font-size: 25px;
        }
      }
      .title {
        text-transform: uppercase;
        font-size: 80px;
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
        font-size: 60px;
      }
      .content {
        max-width: 600px;
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 767.5px) {
    .banner .content-wrapper {
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
        .home-about {
          a {
            font-size: 15px;
          }
        }
        .title {
          font-size: 40px;
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
  .ant-col {
    display: flex;
    .product-image-wrapper {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .title-image {
    h1 {
      font-size: 60px;

      width: 40%;
    }
    .title-logo {
      display: flex;
      .logo {
      }
      .name-logo {
        h1 {
          font-size: 24px;
        }
      }
    }
  }

  @media screen and (max-width: 1088px) {
    .product-image-wrapper {
      width: 70%;
      img {
        width: 100%;
      }
    }
    .title-image {
      width: 40%;
      height: 100%;
      h1 {
        font-size: 35px;

        width: 40%;
      }
    }
  }
  @media screen and (max-width: 580px) {
    .product-image-wrapper {
      width: 70%;
    }
    .title-image {
      width: 40%;
      height: 100%;
      h1 {
        font-size: 25px;
        width: 40%;
      }
      .ant-typography {
        font-size: 12px;
      }
      .title-logo {
        .logo {
          img {
            width: 100%;
          }
        }
        .name-logo {
          h1 {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export const BlogsRecentlyWrapper = styled.div`
  padding: 150px;
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
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      cursor: pointer;
    }
  }
  @media screen and (max-width: 991.5px) {
    .title-wrapper {
      h4.ant-typography {
        font-size: 52px;
      }
    }
  }
  @media screen and (max-width: 575.5px) {
    .title-wrapper {
      padding-left: 8px;
      padding-right: 8px;
      h4.ant-typography {
        font-size: 18px;
      }
    }
  }
`;
