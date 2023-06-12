import React, { useContext } from 'react';
import { styled } from 'styled-components';

import { useState, useEffect } from 'react';
import ProductService from './../../Services/productService';
import { useViewport } from './../hooks/useViewport';
import { useLocation } from 'react-router-dom';
import Search from './../Pages/Search';
import FoodsDetail from './../FoodsDetail/FoodsDetail';
import { AppContext } from './../../context/AppProvider';

function SearchProduct(props) {
  const [state, setState] = useState({
    productList: [],
  });

  const { loading, setLoading } = useContext(AppContext);

  const [windowWidth] = useViewport();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const keyWords = useQuery().get('keyWords');

  const [showModal, setShowModal] = useState(false);

  const [foodDetail, setFoodDetail] = useState(0);

  const handleSetFood = (productId) => {
    setFoodDetail(productId);
    setShowModal(true);
  };

  useEffect(() => {
    try {
      setLoading(true);
      async function getData() {
        let productRes = await ProductService.getProductBySearch(keyWords);

        setState({
          ...state,
          productList: productRes.data,
        });

        setLoading(false);
      }

      getData();
    } catch (error) {}
  }, [keyWords]);

  const { productList } = state;
  return (
    <SearchPane>
      {productList && productList.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            }, auto)`,
          }}
        >
          {productList.length > 0 &&
            productList.map((product) => (
              <div
                key={product.productId}
                draggable="false"
                className="foodItem w-[320px] min-w-[320px] md:w-[300px] md:min-w-[300px] my-12 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer productItem"
                onClick={() => handleSetFood(product.productId)}
              >
                <div className="w-full flex items-center justify-between">
                  <img
                    className="w-40 h-40 md:w-48 md:h-40 -mt-8 object-contain cursor-pointer"
                    alt="Strawberry and Vanilla"
                    src={product.productAvatar.fileUrl}
                  />
                </div>
                <div
                  className="foodTitle w-full flex items-end justify-end flex-col"
                  draggable="false"
                >
                  <p className="text-textColor font-semi-bold text-lg">
                    {product.productTitle}
                  </p>
                  <div className="flex items-center justify-between gap-8 ">
                    <p className="text-base text-headingColor font-semibold">
                      <span className="text-sm text-red-600"></span>
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(product.price)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.unitTitle}
                  </p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <NotFound>
          <h1>Your search for "keywords" did not have any matches.</h1>
        </NotFound>
      )}
      {showModal && <FoodsDetail productId={foodDetail} />}
    </SearchPane>
  );
}

export default SearchProduct;

const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: var(--color-background);
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover .productItem {
      opacity: 0.7;
    }

    .productItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 235px;
      border-radius: 12px;
      margin: 20px 0;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.1);
        z-index: 10;
        opacity: 1;
      }

      img {
        object-fit: cover;
      }
    }
  }
`;

const NotFound = styled.div`
  padding: 5rem 8rem;
  color: var(--color-white);
`;
