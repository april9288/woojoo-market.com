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
                    New Social Marketplace for Geek Stuff
                    <Link to="/signup">
                        <StyledButton>Sign Up Now</StyledButton>
                    </Link>
                </StyledText>
            </StyledGrayLayer>
        </StyledFirstSection>
        <StyledSubSection>
            <StyledText2>
                Find your geek stuff
                <Link to="/login">
                    <StyledButton att="shop">Shop Now</StyledButton>
                </Link>
            </StyledText2>
            <StyledImage
                src="https://woojoo.s3-us-west-1.amazonaws.com/search2.webp"
                alt="search"
            ></StyledImage>
        </StyledSubSection>
        <StyledSubSection>
            <StyledImage
                src="https://woojoo.s3-us-west-1.amazonaws.com/share2.webp"
                alt="share"
            ></StyledImage>
            <StyledText2>
                Share your experience
                <Link to="/login">
                    <StyledButton att="shop">Shop Now</StyledButton>
                </Link>
            </StyledText2>
        </StyledSubSection>
    </StyledSection>
);

export default PublicHome;
