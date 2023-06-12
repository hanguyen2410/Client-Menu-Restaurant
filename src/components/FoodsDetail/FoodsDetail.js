import React from 'react';
import { keyframes, styled } from 'styled-components';
import { useState, useEffect } from 'react';
import ProductService from './../../Services/productService';

function FoodsDetail(props) {
  const { productId } = props;

  const [state, setState] = useState({
    productDetail: [],
    showModalDetail: false,
  });

  const handleCloseModal = () => {
    setState({
      ...state,
      showModalDetail: false,
    });
  };

  useEffect(() => {
    try {
      setState({ ...state, loading: true });
      async function getProductDetail() {
        let productRes = await ProductService.getProductById(productId);
        setState({
          ...state,
          productDetail: productRes.data,
          showModalDetail: true,
        });
      }
      getProductDetail();
    } catch (error) {}
  }, [productId]);

  const { productDetail, showModalDetail } = state;
  console.log(productDetail);
  return (
    <FoodsDetailModal>
      <div
        className={`backdrop ${
          showModalDetail ? 'showBackdrop' : 'hideBackdrop'
        }`}
        onClick={handleCloseModal}
      ></div>
      <div
        className={`modal ${showModalDetail ? 'showModal' : 'hideModal'}`}
        style={{
          backgroundImage: `url(${
            productDetail != null &&
            productDetail.productAvatar != null &&
            productDetail.productAvatar.fileUrl
          })`,
          backgroundSize: 'cover',
          backgroundRepeat: 'round',
        }}
      >
        <div className="container">
          <div className="foodInfo">
            <h1 className="foodTitle">{productDetail.productTitle}</h1>
            <p className="statistical">
              <span className="price">
                {' '}
                Giá:{' '}
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(productDetail.price)}
              </span>
            </p>
            <p className="unit">
              Đơn vị : 1{' '}
              {productDetail != null &&
                productDetail.unitTitle != null &&
                productDetail.unitTitle}
            </p>
            <p className="category">
              Danh Mục :{' '}
              {productDetail != null &&
                productDetail.unitTitle != null &&
                productDetail.category.title}
            </p>
            <p className="overview">Mô tả: {productDetail.description}</p>
          </div>
        </div>
      </div>
    </FoodsDetailModal>
  );
}

export default FoodsDetail;

const fadeIn = keyframes`
    0%: {background: rgba(0,0,0,0)}
    100%: {background: rgba(0,0,0,0.6)}
`;

const FoodsDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    justify-content: center;
    top: 25%;
    left: 0;
    z-index: 300;
    height: 70%;
    width: 100%;
    margin: 0 auto;
    color: var(--color-white);
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;

    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 40%, transparent);

      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 40%,
          rgba(0, 0, 0, 0.733),
          transparent
        );
        width: 88%;
      }

      @media screen and (max-width: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 50%,
          transparent
        );
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88) 60%,
          transparent
        );
      }

      .foodInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: var(--color-white);
        font-size: 20px;
        padding-top: 30px;

        @media screen and (max-width: 600px) {
          font-size: 16px;
          width: 80%;
        }

        .foodTitle {
          margin-top: 30px;
        }

        .statistical {
          margin-top: 20px;
          display: flex;

          .price {
            color: red;
            font-weight: 700;
          }
        }
        .unit,
        .category,
        .overview {
          margin-top: 12px;
        }

        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;

          @media screen and (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
`;
