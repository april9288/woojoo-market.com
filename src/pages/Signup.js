import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
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

const Signup = ({ location }) => {
    // pathname would be '/signup'
    const { pathname } = location;

    // check if there is a JWT token in the local storage
    // if true, then let the user bypass the login validation
    if (localStorage.getItem('WJM_TOKEN')) {
        return <Redirect to="/feed" />;
    }

    return (
        <Fragment>
            <Nav pathname={pathname} />
            <LoginSection>
                <LoginContainer pathname={pathname} />
            </LoginSection>
        </Fragment>
    );
};

export default Signup;
