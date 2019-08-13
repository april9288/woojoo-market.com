import React from 'react';
import { Link } from 'react-router-dom';

import { StyledNoMatchSection } from './styles';

const NoMatch = () => (
    <StyledNoMatchSection>
        <img
            alt="404"
            src="https://woojoo.s3-us-west-1.amazonaws.com/404.webp"
            height="50%"
        />
        <Link to="/">Go back</Link>
    </StyledNoMatchSection>
);

export default NoMatch;
