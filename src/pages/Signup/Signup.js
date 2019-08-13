import React, { Fragment } from 'react';

import Nav from '../../components/PublicNav';
import LoginContainer from '../../containers/LoginContainer';
import { StyledSignupSection } from './styles';

const Signup = ({ location }) => {
    // pathname would be '/signup'
    const { pathname } = location;

    return (
        <Fragment>
            <Nav pathname={pathname} />
            <StyledSignupSection>
                <LoginContainer pathname={pathname} />
            </StyledSignupSection>
        </Fragment>
    );
};

export default Signup;
