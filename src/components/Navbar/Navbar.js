import WhiteLotusLogo from '../../assets/imgaes/logo.png';
import WhiteLotusLogoXanh from '../../assets/imgaes/logo-xanh.png';

import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import { screen } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { useScrollY } from './../hooks';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {
  const [scrollY] = useScrollY();
  const [keyWords, setKeyWords] = useState('');
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keyWords = e.target.value;
    setKeyWords(keyWords);
    keyWords.length > 0
      ? navigate(`/search?keyWords=${keyWords.trim()}`)
      : navigate('/');
  };

  const goHome = () => {
    navigate('/');
    setKeyWords('');
  };

  let className = '';

  console.log('scrollY');
  console.log(scrollY);

  if (scrollY < 50) {
    className = '';
  } else {
    className = 'nav-active';
  }

  return (
    <Navigation className={className} id="navbar">
      {/* <div className='navContainer'>
                <div className='logo' onClick={goHome}>
                    <img src={WhiteLotusLogo} alt="" />
                </div>
                <div className='navSearch'>
                    <BsSearch className='iconSearch' />
                    <input type="text" placeholder='Input foods, drinks' 
                    onChange={handleChangeInput}
                    value={keyWords}
                    />
                </div>
            </div> */}

      <div className="container-fluid">
        <div className="navbar-header">
          <label
            htmlFor="toggle-hamburger"
            className="hamburger hamburger--squeeze"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </label>
          <div className="logo" onClick={goHome}>
            <a className="logo-default" href="">
              <img src={WhiteLotusLogo} alt="logo" />
            </a>
            <a className="logo-sticky" href="">
              <img src={WhiteLotusLogoXanh} alt="logo" />
            </a>
          </div>
        </div>
        <div className="languages">
          <div className="navSearch">
            <BsSearch className="iconSearch" />
            <input
              type="text"
              placeholder="Input foods, drinks"
              onChange={handleChangeInput}
              value={keyWords}
            />
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  /* .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;

    @media only srceen and (max-width: 600px) {
        flex-direction: column;
    }
}

.logo {
    width: 120px;
    cursor: pointer;
    img {
        width: 100%;
    }
} */

  .navSearch {
    color: var(--color-white);
    padding-right: 30px;
    display: flex;
    justify-content: flex-end;

    &:hover .iconSearch {
      color: var(--color-white);
    }

    .iconSearch {
      width: 30px;
      height: 30px;
      cursor: pointer;
      transform: translateX(34px) translateY(5px);
      color: #fff;
    }

    input {
      font-size: 18px;
      border: 1px solid #fff;
      color: black;
      outline: none;
      width: 0;
      padding: 10px;
      cursor: pointer;
      opacity: 0;
      background-color: var(--color-logo);
      transition: width 0.5s;

      &:focus {
        padding-left: 37px;
        width: 400px;
        cursor: text;
        opacity: 1;
        border-radius: 4px;
      }
    }
    ::placeholder {
      color: var(--color-white);
    }
  }
`;
