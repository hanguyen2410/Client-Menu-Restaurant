import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import styled from 'styled-components';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { SmoothFoodScrolling } from '../../ultils';
import { useRef } from 'react';
import { useViewport } from './../hooks/useViewport';
import FoodsDetail from './../FoodsDetail/FoodsDetail';
import SpecialProductService from './../../Services/SpecialProductService';

function SpecialProductContent(props) {
  const [state, setState] = useState({
    specialProducts: [],
  });

  useEffect(() => {
    try {
      async function getData() {
        let productRes = await SpecialProductService.getSpecialProducts(4);
        setState({
          ...state,
          specialProducts:
            typeof productRes.data != 'string' ? productRes.data : [],
        });
      }

      getData();
    } catch (error) {}
  }, []);

  const { specialProducts } = state;
  console.log(state);

  const sliderRef = useRef();
  const foodRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewport();

  const [showModal, setShowModal] = useState(false);

  const [foodDetail, setFoodDetail] = useState(0);

  const handleSetFood = (productId) => {
    setFoodDetail(productId);
    setShowModal(true);
  };

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothFoodScrolling(
        sliderRef.current,
        200,
        foodRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    if (sliderRef.current.scrollLeft > 0) {
      SmoothFoodScrolling(
        sliderRef.current,
        200,
        -(foodRef.current.clientWidth * 2),
        sliderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag, specialProducts]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <FoodsRowContainer draggable="false" id="Special">
      <div className="w-full flex items-center justify-center">
        <p className="text-2xl text-headingColor font-semi-bold capitalize relative before:absolute before:rounded before:content before:w-32 before:h-1 before:-bottom-2 before:left-6 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
          White Lotus Special
        </p>
      </div>
      <FoodsSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          specialProducts?.length > 0 && specialProducts
            ? {
                gridTemplateColumns: `repeat(${specialProducts.length},
                  ${
                    windowWidth > 1600? '16%' 
                              :
                              windowWidth > 1400 ? '18%'
                              : 
                              windowWidth > 1200 ? '21%'
                              :
                              windowWidth > 1020 ? '27%' 
                              :
                              windowWidth > 992 ? '28%'
                              : 
                              windowWidth > 768 ? '33%'
                          : '40%'
                  })`,
              }
            : {}
        }
      >
        {specialProducts.length > 0 &&
          specialProducts.map((specialProduct) => (
            <div
              key={specialProduct.productId}
              ref={foodRef}
              draggable="false"
              className="foodItem w-[320px] min-w-[320px] md:w-[300px] md:min-w-[300px] my-12 h-auto bg-cardOverlay rounded-lg p-2 px-3 backdrop-blur-lg hover:drop-shadow-sm cursor-pointer"
              onClick={() => handleSetFood(specialProduct.productId)}
            >
              <div className="w-full flex items-center justify-between">
                <img
                  className="w-40 h-40 md:w-48 md:h-40 -mt-8 object-contain cursor-pointer"
                  alt="Strawberry and Vanilla"
                  src={specialProduct.productAvatar.fileUrl}
                />
              </div>
              <div
                className="foodTitle w-full flex items-end justify-end flex-col"
                draggable="false"
              >
                <p className="text-textColor font-semi-bold text-lg">
                  {specialProduct.productTitle}
                </p>

                <div className="flex items-center justify-between gap-8 ">
                  <p className="text-base text-headingColor font-semibold">
                    <span className="text-sm text-red-600"></span>
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(specialProduct.price)}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {specialProduct.unitTitle}
                </p>
              </div>
            </div>
          ))}
      </FoodsSlider>
      <div className="btnLeft" onClick={handleScrollLeft}>
        <AiOutlineCaretLeft />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        <AiOutlineCaretRight />
      </div>
      {showModal && <FoodsDetail productId={foodDetail} />}
    </FoodsRowContainer>
  );
}

export default SpecialProductContent;

const FoodsRowContainer = styled.div`
  background-color: var(--color-logo);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  /* .heading {
    font-size: 18px;
    user-select: none;
} */

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

    &.isMenuBestSale {
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
  display: grid;
  gap: 16px;
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
