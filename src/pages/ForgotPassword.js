import React, { Fragment } from 'react';
import styled from 'styled-components';

import Nav from '../components/Public/Nav';
import LoginContainer from '../components/Login/LoginContainer';

const LoginSection = styled.section`
    height: 100vh;
    background: #fef6ff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ForgotPassword = ({ location }) => {
    // pathname would be '/forgotPassword'
    const { pathname } = location;

    return (
        <Fragment>
            <Nav pathname={pathname} />
            <LoginSection>
                <LoginContainer pathname={pathname} />
            </LoginSection>
        </Fragment>
    );
};

export default ForgotPassword;
