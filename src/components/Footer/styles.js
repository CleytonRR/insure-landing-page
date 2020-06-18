import styled from 'styled-components';

import imageFooter from '../../assets/bg-pattern-footer-desktop.svg';

export const FooterContainer = styled.footer`
  background-color: #fff;
  background-image: url(${imageFooter});
  background-repeat: no-repeat;
  margin-top: 100px;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid hsl(256, 26%, 20%);

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img``;

export const SocialMedia = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 560px) {
    margin-top: 20px;
  }
`;

export const SocialMediaItems = styled.img`
  cursor: pointer;
  transition: all 500ms;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContainerMoreOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: 'Karla', sans-serif;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerItemsMoreOptions = styled.div`
  text-transform: uppercase;

  @media (max-width: 560px) {
    text-align: center;
  }
`;

export const TitleMoreOptions = styled.h5`
  color: hsl(273, 4%, 51%);
`;

export const ListMoreOptions = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItemMoreOptions = styled.li`
  margin-bottom: 5px;
`;

export const ListLinkMoreOptions = styled.a`
  color: hsl(256, 26%, 20%);
  font-size: 13px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
