import React, { Fragment } from 'react';

import { StyledLoginSection } from './styles';
import Nav from '../../components/PublicNav';
import LoginContainer from '../../containers/LoginContainer';

const Login = ({ location }) => {
    // pathname would be '/login'
    const { pathname } = location;

    return (
        <Fragment>
            <Nav pathname={pathname} />
            <StyledLoginSection>
                <LoginContainer pathname={pathname} />
            </StyledLoginSection>
        </Fragment>
    );
};

export default Login;
