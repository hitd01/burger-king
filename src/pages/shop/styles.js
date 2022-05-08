import styled from 'styled-components';
import ShopBG from '../../assets/images/shop-bg.png';

export const BannerWrapper = styled.div`
  background: url(${ShopBG}) no-repeat center;
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
    background: rgba(0, 0, 0, 0.4);
    height: 100vh;
    .content-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .navigate {
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
        .navigate {
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

export const ContainerWrapper = styled.div`
  padding-top: 150px;
  .filter-wrapper {
    position: relative;
    margin-bottom: 20px;
    .ant-menu {
      border: none;
    }

    .ant-menu.category-menu {
      .ant-menu-item {
        .ant-menu-title-content {
          font-size: 20px;
          color: var(--text-primary);
        }
      }
    }

    .ant-menu.sort-menu {
      width: 250px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10;
      .ant-menu-submenu {
        &-title {
          .anticon,
          .ant-menu-title-content {
            font-size: 20px;
            color: var(--text-primary);
          }
        }
        .ant-menu-sub {
          .ant-menu-item {
            font-size: 20px;
            color: var(--text-primary);
          }
        }
      }
    }
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

  @media screen and (max-width: 991.5px) {
    .filter-wrapper {
      .ant-menu.sort-menu {
        position: relative;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 767.5px) {
  }
  @media screen and (max-width: 575.5px) {
    .container {
      padding: 0 8px;
    }
    .filter-wrapper {
      .ant-menu.category-menu {
        .ant-menu-item {
          .ant-menu-title-content {
            font-size: 18px;
          }
        }
      }

      .ant-menu.sort-menu {
        .ant-menu-submenu {
          &-title {
            .anticon,
            .ant-menu-title-content {
              font-size: 18px;
            }
          }
          .ant-menu-sub {
            .ant-menu-item {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;
