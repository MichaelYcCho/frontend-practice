import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';

export const Nav = styled.nav`
    /*background: transparent;*/
    background-color: #0d0909;
    height: 80px;
    display: flex;
    font-weight: 700;
`;

export const TempSearchContainer = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    margin: 0 auto;

    input{
      width: 100%;   
    }


`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    margin-top: 0.63rem;
    }
`;

export const Bars = styled(VscMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;