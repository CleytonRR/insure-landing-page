import React from 'react';

import logo from '../../assets/logo.svg';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconPinterest from '../../assets/icon-pinterest.svg';
import iconInstagram from '../../assets/icon-instagram.svg';

import {
  FooterContainer,
  Container,
  ContainerSocialMedia,
  Logo,
  SocialMedia,
  SocialMediaItems,
  ContainerMoreOptions,
  ContainerItemsMoreOptions,
  TitleMoreOptions,
  ListMoreOptions,
  ListItemMoreOptions,
  ListLinkMoreOptions,
 } from "./styles";

 const logos = [
    iconFacebook,
    iconTwitter,
    iconPinterest,
    iconInstagram,
 ]

 const options = [
   {
     title: "our company",
     itens: [
      "how we work",
      "why insure?",
      "View Plans",
      "reviews"
     ]
   },
   {
    title: "help me",
    itens: [
      "faq",
      "terms of use",
      "privacy policy",
      "cookies"
    ]
  },
  {
    title: "contact",
    itens: [
      "sales",
      "support",
      "Live Chat",
    ]
  },

  {
    title: "Others",
    itens: [
      "Careers",
      "Press",
      "licenses",
    ]
  },
 ]


const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <ContainerSocialMedia>
          <Logo src={logo} />
          <SocialMedia>
            {logos.map((logo, index) => <SocialMediaItems key={String(index)} src={logo} />)}
          </SocialMedia>
        </ContainerSocialMedia>

        <ContainerMoreOptions>

          {options.map((item, index) => (
            <ContainerItemsMoreOptions key={String(index)}>
              <TitleMoreOptions>{item.title}</TitleMoreOptions>
              <ListMoreOptions>
              {item.itens.map((item, index) => (
                  <ListItemMoreOptions key={String(index)}>
                    <ListLinkMoreOptions>{item}</ListLinkMoreOptions>
                  </ListItemMoreOptions>
              ))}
                </ListMoreOptions>
            </ContainerItemsMoreOptions>
          ))}
        </ContainerMoreOptions>
      </Container>
    </FooterContainer>
  )
}

export default Footer;
