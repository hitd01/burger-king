import styled from 'styled-components';
import ProductBG from '../../assets/images/product-bg.jpg';

export const BannerWrapper = styled.div`
  background: url(${ProductBG}) no-repeat center;
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
      .home-shop {
        a {
          color: white;
          font-size: 25px;
          &:hover {
            color: var(--primary-color);
          }
        }
        .ant-typography {
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
            font-size: 18px;
          }
          .ant-typography {
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

export const ProductInfo = styled.div`
  padding-top: 100px;
  h2.ant-typography {
    font-size: 38px;
    color: var(--text-primary);
  }
  .rate-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .ant-typography {
      font-size: 20px;
      color: var(--text-primary);
      margin-left: 24px;
    }
  }
  span.ant-typography {
    font-size: 20px;
    color: var(--text-primary);
  }
  .quantity-change-wrapper {
    display: flex;
    margin: 20px 0;
    align-items: center;
    .quantity-change {
      display: flex;
      align-items: center;
      height: 80px;
      margin-right: 30px;
      .quantity {
        width: 80px;
        background: var(--primary-color-light);
        text-align: center;
        height: 80px;
        line-height: 80px;
      }
      .btn-wrapper {
        display: flex;
        flex-direction: column;
        .ant-btn {
          height: 40px;
          background: var(--primary-color);
          color: var(--white-color);
        }
      }
    }
    .btn-add {
      .ant-btn {
        height: 80px;
        background: var(--primary-color);
        color: var(--white-color);
        border: none;
        padding: 8px 40px;
        span {
          font-size: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 991.5px) {
    .quantity-change-wrapper {
      .quantity-change {
        height: 60px;
        margin-right: 15px;
        .quantity {
          width: 60px;
          height: 60px;
          line-height: 60px;
        }
        .btn-wrapper {
          .ant-btn {
            height: 30px;
          }
        }
      }
      .btn-add {
        .ant-btn {
          height: 60px;
          padding: 8px 20px;
        }
      }
    }
  }
  @media screen and (max-width: 575.5px) {
    .container {
      padding: 0 8px;
    }
    h2.ant-typography {
      font-size: 32px;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  padding-top: 100px;
  h4.ant-typography {
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 24px;
    background: var(--primary-color-dark);
    padding: 8px 15px;
    max-width: 300px;
  }
  span.ant-typography {
    color: var(--text-primary);
    font-size: 18px;
    text-align: justify;
    display: inline-block;
    line-height: 1.8;
  }
  @media screen and (max-width: 575.5px) {
    .container {
      padding: 0 8px;
    }
  }
`;

export const ReviewWrapper = styled.div`
  padding-top: 100px;
  h4.ant-typography {
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 24px;
    background: var(--primary-color-dark);
    padding: 8px 15px;
    max-width: 300px;
  }
  .review-wrapper {
    display: flex;
    margin-top: 15px;
    .review {
      margin-left: 40px;
      flex: 1;
      .ant-typography {
        font-size: 18px;
        color: var(--text-primary);
      }
      .top {
        align-items: center;
        display: flex;
        .username {
          margin-right: 15px;
          font-size: 20px;
        }
      }
      .comments {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
      }
    }
  }
  @media screen and (max-width: 575.5px) {
    .container {
      padding: 0 8px;
      .review-wrapper {
        .review {
          margin-left: 20px;
        }
      }
    }
  }
`;

export const AddReviewWrapper = styled.div`
  padding-top: 100px;
  h4.ant-typography {
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 24px;
    background: var(--primary-color-dark);
    padding: 8px 15px;
    max-width: 300px;
  }
  .require-login {
    color: var(--text-primary);
    font-size: 20px;
  }
  .ant-form {
    background: var(--primary-color-light);
    padding: 20px 12px;
    &-item {
      align-items: center;
      &-label {
        label {
          color: var(--text-primary);
          font-size: 18px;
        }
      }
      &-control {
        &-input {
          &-content {
            .rate {
              display: flex;
              align-items: center;
              .anticon {
                color: var(--secondary-color);
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 575.5px) {
    .container {
      padding: 0 8px;
    }
  }
`;

export const RelatedProductsWrapper = styled.div`
  padding-top: 100px;
  h4.ant-typography {
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 24px;
    background: var(--primary-color-dark);
    padding: 8px 15px;
    max-width: 300px;
  }
  .ant-row {
    margin-bottom: 40px;
    .ant-col {
      .info-wrapper {
        background-color: var(--secondary-color-light);
        padding: 10px 10px 24px;
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
          .icon-wrapper {
            display: flex;
            .icon {
              width: 35px;
              height: 35px;
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
              margin-right: 8px;
            }
            .eye {
              background-color: var(--primary-color);
              margin-right: 8px;
            }
            .heart {
              background-color: var(--secondary-color);
            }
          }
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 575.5px) {
    .container {
      padding: 0 8px;
    }
  }
`;
