import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
    StyledFirstLine,
    StyledSection,
    StyledLogo,
    StyledButton,
    StyledDivider
} from './styles';

const PublicNav = ({ pathname }) => {
    let buttons;
    switch (pathname) {
        case '/login':
            buttons = <Link to="/signup">Sign Up</Link>;
            break;
        case '/signup':
            buttons = <Link to="/login">Log In</Link>;
            break;
        default:
            buttons = (
                <Fragment>
                    <Link to="/login">Log In</Link>
                    <StyledDivider />
                    <Link to="/signup">Sign Up</Link>
                </Fragment>
            );
            break;
    }

    return (
        <Fragment>
            <StyledFirstLine>
                <StyledButton>{buttons}</StyledButton>
            </StyledFirstLine>
            <StyledSection>
                <img
                    src="https://woojoo.s3-us-west-1.amazonaws.com/logo1.png"
                    alt="mylogo"
                    width="120px"
                />
            </StyledSection>
        </Fragment>
    );
};

export default PublicNav;
