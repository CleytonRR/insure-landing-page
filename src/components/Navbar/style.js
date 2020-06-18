import styled from 'styled-components';

import IconHamburger from '../../assets/icon-hamburger.svg';
import IconClose from '../../assets/icon-close.svg';
import BgNavMenu from '../../assets/bg-pattern-mobile-nav.svg';

export const ContainerMenu = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-family: 'Karla', sans-serif;

  @media (max-width: 777px) {
    align-items: center;
    height: 50px;
  }
`;

export const LogoMenu = styled.img`
  width: 100px;
  height: 20px;
  margin: auto 0;
`;

export const Hamburger = styled.button`
  border: none;
  ${(props) =>
    props.openMenu
      ? `background-image: url(${IconClose});`
      : `background-image: url(${IconHamburger});`}
  display: none;
  cursor: pointer;
  width: 32px;
  height: 32px;

  @media (max-width: 777px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  transition: all 500ms ease-in;

  @media (max-width: 777px) {
    position: absolute;
    top: 34px;
    ${(props) => (props.openMenu ? `left: 0;` : `left: -1000px;`)}
    height: 100vh;
    width: 100vw;
    background-color: hsl(256, 26%, 20%);
    background-image: url(${BgNavMenu});
    background-repeat: no-repeat;
    background-position: bottom right;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  color: hsl(273, 4%, 51%);
  text-transform: uppercase;
  margin: auto 15px;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    color: hsl(270, 9%, 17%);
  }

  @media (max-width: 777px) {
    display: block;
    color: #fff;
    margin: 30px 0;
    font-size: 20px;
  }
`;

export const ButtonMenu = styled.button`
  color: hsl(270, 9%, 17%);
  border: 1px solid hsl(270, 9%, 17%);
  background-color: transparent;
  text-transform: uppercase;
  padding: 13px 20px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    color: #fff;
    background-color: hsl(270, 9%, 17%);
  }

  @media (max-width: 777px) {
    display: block;
    width: 200px;
    border: 1px solid #fff;
    color: #fff;
  }
`;
