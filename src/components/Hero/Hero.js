import React from "react";
import {Link} from 'react-router-dom';
import { Button, Container, MainHeading } from "../../globalStyles";
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';



const Hero = () => {
    return (
        <HeroSection>
        {/* C:\MyCodes\React\check-out folder\responsive-react-app\public\assets\hero1.mp4 */}
            <HeroVideo src="./video/hero1.mp4" autoPlay muted/>
            <Container>
                <MainHeading>Your data is secure with us</MainHeading>

                <HeroText>
                    We provide the best security system for clients all over the world
                </HeroText>
                <ButtonWrapper>
                    <Link to='signup'>
                        <Button>Get started</Button>
                    </Link>
                    <HeroButton>Find More</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero;