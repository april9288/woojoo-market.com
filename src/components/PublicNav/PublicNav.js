/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
    StyledFirstLine,
    StyledSection,
    StyledLogo,
    StyledButton,
    StyledDivider
} from './styles';

const PublicNav = ({ pathname, history }) => {
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
                    onClick={() => history.push('/')}
                />
            </StyledSection>
        </Fragment>
    );
};

export default withRouter(PublicNav);
