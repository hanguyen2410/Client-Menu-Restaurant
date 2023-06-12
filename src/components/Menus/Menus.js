import { AiFillHome } from 'react-icons/ai';
import { BiFoodMenu, BiDrink } from 'react-icons/bi'
import { FaHotjar } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { GiCupcake } from 'react-icons/gi'
import { MdFolderSpecial } from 'react-icons/md'
import { styled } from 'styled-components';
import Intro from './../Intro/Intro';
import MenuItem from './MenuItem';


function Menus(props) {
    return (
        <MenusPane>
            <MenuItem name="Home" Icon={AiFillHome} to='Intro' />
            <MenuItem name="Top Sales" Icon={FaHotjar} to='TopSale' />
            <MenuItem name="Special Foods" Icon={MdFolderSpecial} to='Special' />
            <MenuItem name="Menu" Icon={BiFoodMenu} to='Menu' />
            <MenuItem name="Desserts" Icon={GiCupcake} to='Menu' />
        </MenusPane>
    )
}

export default Menus;

const MenusPane = styled.div`
position: fixed;
left: 0;
top: 20%;
width: 46px;
padding: 4px 0;
background: rgba(234,234,234,0.3);
z-index: 100;
display: flex;
flex-direction: column;
transform-origin: left-center;
transition: all 0.3s linear;
overflow: hidden;

&:hover {
    width: 180px;
    background: rgba(220,220,220,0.5);
}

.subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .icon{
        font-size: 30px;
        margin-right: 8px;
    }

    span {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255,255,255,0.6);

        &:hover {
            color: var(--color-white);
        }
    }
}



`;