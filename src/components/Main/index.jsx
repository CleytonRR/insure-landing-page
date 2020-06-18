import React from 'react';

import {
  Container,
  ContainerDetails,
  Title,
  ContainerItems,
  Item,
  IconItem,
  TitleItem,
  DescriptionItem,
  ContainerAbout,
  AboutTitle,
  AboutButton
 } from "./styles";

 import snappyProcess from '../../assets/icon-snappy-process.svg';
 import affordableIcon from '../../assets/icon-affordable-prices.svg';
 import peopleFirst from '../../assets/icon-people-first.svg';

 const details = [
   {
     icon: snappyProcess,
     title: "Snappy Process",
     description: "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedius forms."
   },
   {
     icon: affordableIcon,
     title: "Affordable Prices",
     description: "We don't want you worryng about high monthly costs. Our prices may be low, but we still offer the best coerage possible."
   },
   {
     icon: peopleFirst,
     title: "People First",
     description: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
   }
 ]

const Main = () => {
  return (
    <Container>
      <ContainerDetails>
        <Title>
          We're different
        </Title>

        <ContainerItems>
          {details.map((item, index) => (
            <Item key={String(index)}>
              <IconItem src={item.icon} />
              <TitleItem>
                {item.title}
              </TitleItem>
              <DescriptionItem>
                {item.description}
              </DescriptionItem>
            </Item>
          ))}
        </ContainerItems>
        <ContainerAbout>
          <AboutTitle>
            Find out more <br /> about how we work
          </AboutTitle>
          <AboutButton>
            How we work
          </AboutButton>
        </ContainerAbout>
      </ContainerDetails>
    </Container>
  )
}

export default Main;
