import React, { Fragment } from 'react';

import { StyledSignupSection } from './styles';
import Nav from '../../components/PublicNav';
import LoginContainer from '../../containers/LoginContainer';

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
