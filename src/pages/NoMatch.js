import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoMatchSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
`;

const NoMatch = () => {
    return (
        <NoMatchSection>
            <img
                alt="404"
                src="https://woojoo.s3-us-west-1.amazonaws.com/404.webp"
                height="50%"
            />
            <Link to="/">Go back</Link>
        </NoMatchSection>
    );
};

export default NoMatch;
