import React from 'react';

import {
  HeaderContainer, Container, ContainerText, Title, Detail, Button, Image,
} from './style';

import IntroImage from '../../assets/image-intro-desktop.jpg';

const Header = () => (
  <HeaderContainer>
    <Container>
      <ContainerText>
        <Title>
          Humanizing your insurance.
        </Title>
        <Detail>
          Get your life insurance coverage easier and faster. We blend
          our expertise and technology to help you find the plan that s
          right for your. Ensure you and your loved ones are protected.
        </Detail>
        <Button>
          View Plans
        </Button>
      </ContainerText>
      <Image src={IntroImage} />
    </Container>
  </HeaderContainer>
);

export default Header;
