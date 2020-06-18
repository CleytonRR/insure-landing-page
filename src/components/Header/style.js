import styled from 'styled-components';

import BackgroundSvg from '../../assets/bg-pattern-intro-right-desktop.svg';
import BackgroundSvgMobile from '../../assets/bg-pattern-intro-right-mobile.svg';

export const HeaderContainer = styled.header`
  width: 100vw;
  background-color: hsl(256, 26%, 20%);
  background-image: url(${BackgroundSvg});
  background-repeat: no-repeat;
  background-position: top right;

  @media (max-width: 375px) {
    background-image: url(${BackgroundSvgMobile});
    background-position: bottom right;
  }
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 770px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const ContainerText = styled.div`
  font-family: 'DM Serif Display', serif;
  width: 600px;

  @media (max-width: 770px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: hsl(0, 0%, 98%);
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 0;

  &::before {
    content: '';
    width: 100px;
    height: 2px;
    display: block;
    background-color: #fff;
    margin-bottom: 20px;
  }

  @media (max-width: 770px) {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;

    &::before {
      display: none;
    }
  }

  @media (max-width: 518px) {
    font-size: 40px;
  }
`;

export const Detail = styled.p`
  color: hsl(0, 0%, 98%);
  font-family: 'Karla', sans-serif;

  @media (max-width: 770px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  transform: translateY(100px);
  height: 450px;

  @media (max-width: 770px) {
    transform: none;
    flex-direction: column-reverse;
    align-items: center;
    width: 375px;
    height: 451px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  font-family: 'Karla', sans-serif;
  color: hsl(0, 0%, 98%);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 13px 20px;
  border: 1px solid hsl(0, 0%, 98%);
  transition: all 500ms;

  &:hover {
    background-color: hsl(0, 0%, 98%);
    color: hsl(256, 26%, 20%);
  }

  @media (max-width: 770px) {
    margin-bottom: 20px;
  }
`;
