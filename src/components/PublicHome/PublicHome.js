import React from 'react';
import { Link } from 'react-router-dom';

import {
    StyledSection,
    StyledFirstSection,
    StyledGrayLayer,
    StyledText,
    StyledButton,
    StyledSubSection,
    StyledText2,
    StyledImage
} from './styles';

const PublicHome = () => (
    <StyledSection>
        <StyledFirstSection>
            <StyledGrayLayer>
                <StyledText>
                    New Social Marketplace for Geek Items
                    <Link to="/signup">
                        <StyledButton>Sign Up Now</StyledButton>
                    </Link>
                </StyledText>
            </StyledGrayLayer>
        </StyledFirstSection>

        <StyledSubSection>
            <StyledText2>
                Find Your Geek Items
                <section style={{ fontSize: '2rem' }}>
                    <p>Discover Items from Our Market</p>
                </section>
                <Link to="/login">
                    <StyledButton att="shop">Shop Now</StyledButton>
                </Link>
            </StyledText2>
            <StyledImage
                src="https://woojoo.s3-us-west-1.amazonaws.com/com.webp"
                alt="search"
            ></StyledImage>
        </StyledSubSection>

        <StyledSubSection>
            <StyledImage
                src="https://woojoo.s3-us-west-1.amazonaws.com/com22.webp"
                alt="jamie"
            ></StyledImage>
        </StyledSubSection>

        <StyledSubSection>
            <StyledImage
                src="https://woojoo.s3-us-west-1.amazonaws.com/drone.webp"
                alt="share"
            ></StyledImage>
            <StyledText2>
                Best Way to Sell Online
                <section style={{ fontSize: '2rem' }}>
                    <p>Take a photo of items and upload it for money</p>
                </section>
                <Link to="/login">
                    <StyledButton att="shop">Shop Now</StyledButton>
                </Link>
            </StyledText2>
        </StyledSubSection>
    </StyledSection>
);

export default PublicHome;
