import styled from 'styled-components';
import { useState, useEffect } from 'react';
import CategoryService from './../../Services/CategoryService';
import ProductService from './../../Services/productService';
import CategoryItem from '../Category';
import FoodsDetail from '../FoodsDetail/FoodsDetail';
import React, { useContext } from 'react';

import { AppContext } from './../../context/AppProvider';
import { useViewport } from './../hooks/useViewport';

function MenuContent(props) {
  const { idSection } = props;
  const [state, setState] = useState({
    categories: [],
    productList: [],
    productDetail: [],
  });

  const { loading, setLoading } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);

  const [foodDetail, setFoodDetail] = useState(0);

  // const [windowWidth] = useViewport();

  const handleSetFood = (productId) => {
    setFoodDetail(productId);
    setShowModal(true);
  };

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    try {
      setLoading(true);
      async function getData() {
        let categoryRes = await CategoryService.getCategoryProduct();
        let productRes = await ProductService.getProduct(selectedCategory);

        setState({
          ...state,
          categories: categoryRes.data,
          productList: productRes.data,
          loading: true,
        });

        setLoading(false);
      }

      getData();
    } catch (error) {}
  }, [selectedCategory]);

  const { productList, categories } = state;
  return (
    <>
      <MenuRow className="w-full my-5" id="menu">
        <div className="backgroundOurDishes">
          <div className="w-full flex items-center justify-center">
            <p className="text-2xl text-headingColor font-semi-bold capitalize relative before:absolute before:rounded before:content before:w-32 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
              Our Hot Dishes
            </p>
          </div>
          <div
            className="w-full py-10 flex items-center justify-start content-justify lg:justify-center  h-auto gap-4 md:gap-8  px-2  overflow-x-scroll scrollbar-hidden  scroll-smooth"
            style={{ opacity: 1, transform: 'none', justifyContent: 'center' }}
          >
            <CategoryItem
              title={'Menu'}
              categoryId={0}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
              path={
                'M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z'
              }
            />
            <CategoryItem
              title={'Thức Ăn'}
              categoryId={1}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
              path={
                'M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z'
              }
            />
            <CategoryItem
              title={'Đồ Uống'}
              categoryId={2}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
              path={
                'M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z'
              }
            />
            <CategoryItem
              title={'Tráng Miệng'}
              categoryId={3}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
              path={
                'M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 003 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39l-2.73-5.21a6.468 6.468 0 005.4-.02l-2.67 5.23zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42a4.52 4.52 0 01-4.78-.01l-.66-.41-.56.54c-.38.35-.87.56-1.39.56a1.999 1.999 0 01-.32-3.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2z'
              }
            />
            <CategoryItem
              title={'Đặc Biệt'}
              categoryId={4}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
              path={
                'M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2v7zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1z'
              }
            />
          </div>
        </div>
        <FoodsRowContainer id={idSection} className="FoodsRowContainer">
          <FoodsSlider
          // style={
          //     productList.length > 0 && productList
          //         ? {
          //             gridTemplateColumns: `repeat(${productList.length/3},
          //             ${windowWidth > 1200
          //                     ? '15%'
          //                     : windowWidth > 992
          //                         ? '12%'
          //                         : windowWidth > 768
          //                             ? '10%' : '8%'
          //                 })`
          //         } : {}

          // }
          >
            {productList.length > 0 &&
              productList.map((product) => (
                <div
                  key={product.productId}
                  draggable="false"
                  className="foodItem w-[320px] min-w-[320px] md:w-[300px] md:min-w-[300px] my-12 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer"
                  onClick={() => handleSetFood(product.productId)}
                >
                  <div className="w-full flex items-center justify-between">
                    <img
                      className="w-40 h-40 md:w-48 md:h-40 -mt-8 object-contain cursor-pointer"
                      alt="Strawberry and Vanilla"
                      src={
                        'https://res.cloudinary.com/cloudinarymen/image/upload' +
                        '/c_limit,w_160,h_160,q_90/' +
                        product.productAvatar.fileFolder +
                        '/' +
                        product.productAvatar.fileName
                      }
                    />
                  </div>
                  <div
                    className="foodTitle w-full flex items-end justify-end flex-col"
                    draggable="false"
                  >
                    <p className="text-textColor font-semi-bold text-lg line-height">
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
          </FoodsSlider>
        </FoodsRowContainer>
        {showModal && <FoodsDetail productId={foodDetail} />}
      </MenuRow>
    </>
  );
}

export default MenuContent;

const MenuRow = styled.div`
  background-color: var(--color-logo);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
`;

const FoodsRowContainer = styled.div`
  background-color: var(--color-logo);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  .heading {
    font-size: 38px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }

    &.isMenuFoods {
      height: 100px;
      width: max-content;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isMenuFoods {
      height: 100px;
      width: max-content;
    }
  }
`;

const FoodsSlider = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* display: grid; */
  gap: 10px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .foodItem {
    opacity: 0.5;
  }

  .foodItem {
    transform: scale(1);
    transition: all 0.3s linear;
    user-select: none;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }

    img {
      object-fit: cover;
    }
  }
`;
