import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
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
        <StyledSection>
            <StyledLogo>
                <Link to="/">WooJoo Market</Link>
            </StyledLogo>
            <StyledButton>{buttons}</StyledButton>
        </StyledSection>
    );
};

export default PublicNav;
