import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeComponent = styled.section``;

const FirstSection = styled.section`
    background-image: url('https://woojoo.s3-us-west-1.amazonaws.com/bg3.webp');
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
`;

const GrayLayer = styled.section`
    background: rgba(0.1, 0.1, 0.1, 0.4);
    height: 80vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-grid;
    align-items: center;
    text-align: center;
`;

const Text = styled.div`
    margin: 0;
    padding: 0;
    font-size: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginButton = styled.button`
    background: transparent;
    border: ${props =>
        props.att ? '2px solid rgba(0,0,0,0.8)' : '2px solid white'};
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 1rem;
    cursor: pointer;
    color: ${props => (props.att ? 'rgba(0,0,0,0.8)' : 'white')};

    &:hover {
        background: #d93c7cfc;
    }

    a {
        text-decoration: none;
    }
`;

const SubSection = styled.section`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text2 = styled.div`
    color: ${props => (props.att2 || props.att3 ? 'white' : 'rgba(0,0,0,0.8)')};
    font-weight: bold;
    font-size: ${props => (props.att3 ? '2rem' : '4rem')};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgStyle = styled.img`
    margin: 5rem;
`;

const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #4b4453;
    height: 40vh;
    color: white;
    font-size: 4rem;
`;

const Home = () => {
    return (
        <HomeComponent>
            <FirstSection>
                <GrayLayer>
                    <Text>
                        New Social Marketplace for Geek Stuff
                        <Link to="/login">
                            <LoginButton>Sign Up Now</LoginButton>
                        </Link>
                    </Text>
                </GrayLayer>
            </FirstSection>
            <SubSection>
                <Text2>
                    Find your geek stuff
                    <Link to="/login">
                        <LoginButton att="shop">Shop Now</LoginButton>
                    </Link>
                </Text2>
                <ImgStyle
                    src="https://woojoo.s3-us-west-1.amazonaws.com/search2.webp"
                    alt="search"
                ></ImgStyle>
            </SubSection>
            <SubSection>
                <ImgStyle
                    src="https://woojoo.s3-us-west-1.amazonaws.com/share2.webp"
                    alt="share"
                ></ImgStyle>
                <Text2>
                    Share your experience
                    <Link to="/login">
                        <LoginButton att="shop">Shop Now</LoginButton>
                    </Link>
                </Text2>
            </SubSection>
            <FooterSection>
                <Text2 att2={true}>WooJoo Market</Text2>
                <Text2 att3={true}>
                    © 2019 Jong-Ho James Kim All Rights Reserved
                </Text2>
            </FooterSection>
        </HomeComponent>
    );
};

export default Home;
