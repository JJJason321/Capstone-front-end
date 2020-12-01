import React from 'react'
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubtext,
    Form, FormInput,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialMediaLogo,
    WebsiteRights,
    SocialMediaIcons,
    SocialIconLink,
    SocialMediaIcon,


} from './Footer.element';

import {
    FaFacebook, FaYoutube, FaInstagram, FaTwitter
} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join us today! And book an appointment with us!!
                </FooterSubHeading>
                <FooterSubtext>
                    You will receive a 20% off on your first appointment
                </FooterSubtext>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <Button fontBig>Start an appointment</Button>

                </Form>
            </FooterSubscription>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Who we are</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Join us!</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>For Bussiness</FooterLink>
                        <FooterLink to='/'>Opportunity</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Collections</FooterLink>
                        <FooterLink to='/'>Artists</FooterLink>
                        <FooterLink to='/'>Bussiness</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialMediaLogo to='/'>
                        <SocialMediaIcon />
                            Nu&Yu
                        </SocialMediaLogo>
                    <WebsiteRights>The A team - 2020</WebsiteRights>
                    <SocialMediaIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialMediaIcons>
                </SocialMediaWrap>
            </SocialMedia>



        </FooterContainer>
    )
}

export default Footer
