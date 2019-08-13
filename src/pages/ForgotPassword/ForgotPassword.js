import React, { Fragment } from 'react';

import { StyledSection } from './styles';
import Nav from '../../components/PublicNav';
import LoginContainer from '../../containers/LoginContainer';

const ForgotPassword = ({ location }) => {
    // pathname would be '/forgotPassword'
    const { pathname } = location;

    return (
        <Fragment>
            <Nav pathname={pathname} />
            <StyledSection>
                <LoginContainer pathname={pathname} />
            </StyledSection>
        </Fragment>
    );
};

export default ForgotPassword;
