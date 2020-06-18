import styled from 'styled-components';

import BackgroundSvg from '../../assets/bg-pattern-how-we-work-desktop.svg';
import BackgroundSvgMobile from '../../assets/bg-pattern-how-we-work-mobile.svg';

export const Container = styled.section`
  width: 100vw;
  max-width: 1440px;
  display: flex;
  justify-content: center;
`;
export const ContainerDetails = styled.div`
  width: 80%;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 70px;
  font-family: 'DM Serif Display', serif;

  &::before {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    margin-bottom: 20px;
    background-color: hsl(256, 26%, 20%);
  }

  @media (max-width: 770px) {
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 438px) {
    font-size: 35px;
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Item = styled.div`
  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const IconItem = styled.img``;

export const TitleItem = styled.h5`
  font-family: 'DM Serif Display', serif;
  color: hsl(256, 26%, 20%);
  font-size: 30px;
  margin-bottom: 0;
  color: hsl(270, 9%, 17%);
`;

export const DescriptionItem = styled.p`
  font-family: 'Karla', sans-serif;
  color: hsl(273, 4%, 51%);
`;

export const ContainerAbout = styled.div`
  background-color: hsl(256, 26%, 20%);
  background-image: url(${BackgroundSvg});
  background-position: right top;
  background-repeat: no-repeat;
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 770px) {
    background-image: url(${BackgroundSvgMobile});
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutTitle = styled.h5`
  font-family: 'DM Serif Display', serif;
  font-size: 45px;
  color: hsl(0, 0%, 98%);

  @media (max-width: 770px) {
    text-align: center;
  }
`;

export const AboutButton = styled.button`
  font-family: 'Karla', sans-serif;
  color: hsl(0, 0%, 98%);
  background-color: transparent;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid hsl(0, 0%, 98%);
  padding: 13px 20px;
  transition: all 500ms;

  &:hover {
    background-color: hsl(0, 0%, 98%);
    color: hsl(256, 26%, 20%);
  }

  @media (max-width: 770px) {
    margin-bottom: 50px;
  }
`;
