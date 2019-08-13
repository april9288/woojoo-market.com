import React from 'react';

import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import {
    StyledSection,
    StyledForm,
    StyledButton,
    StyledText,
    StyledForgotPasswordButton,
    StyledLink,
    StyledWarning,
    StyledInforming
} from './styles';

const LoginContainer = ({ pathname }) => {
    let form;
    switch (pathname) {
        case '/login':
            form = (
                <LoginForm
                    StyledForm={StyledForm}
                    StyledButton={StyledButton}
                    StyledText={StyledText}
                    StyledForgotPasswordButton={StyledForgotPasswordButton}
                    StyledLink={StyledLink}
                    StyledWarning={StyledWarning}
                />
            );
            break;
        case '/signup':
            form = (
                <SignupForm
                    StyledForm={StyledForm}
                    StyledButton={StyledButton}
                    StyledText={StyledText}
                    StyledLink={StyledLink}
                    StyledWarning={StyledWarning}
                    StyledInforming={StyledInforming}
                />
            );
            break;
        case '/forgotPassword':
            form = (
                <ForgotPasswordForm
                    StyledForm={StyledForm}
                    StyledButton={StyledButton}
                    StyledText={StyledText}
                    StyledInforming={StyledInforming}
                />
            );
            break;
        default:
            form = null;
            break;
    }

    return <StyledSection>{form}</StyledSection>;
};

export default LoginContainer;
