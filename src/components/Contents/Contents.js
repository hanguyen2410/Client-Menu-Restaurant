import React from "react";
import MenuContent from "./MenuContent";
import { FaArrowAltCircleUp } from "react-icons/fa"
import BestSalesContent from "./BestSaleContents"
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { animateScroll as scroll } from "react-scroll"
import { useScrollY } from "../hooks";
import SpecialProductContent from "./SpecialProductContents";

const ScrollToTop = () => {
    scroll.scrollToTop();
}



function Contents(props) {
    const [scrollY] = useScrollY();
    return (
        <div>
            <BestSalesContent />
            <SpecialProductContent />
            <MenuContent idSection='Menu' />
            <GoToTop
                onClick={() => ScrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
                }}
            >
                <FaArrowAltCircleUp />
            </GoToTop>
        </div>
    )
}
export default Contents;

const GoToTop = styled.div`
position: fixed;
z-index: 10;
right: 70px;
bottom: 50px;
font-size: 50px;
color: rgba(255,255,255,0.4);
transition: all 0.3s linear;

&:hover {
color: rgba(255,255,255,0.8);

}

@media screen and (max-width: 600px) {
    right: 40px;
}

`