import React from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const FormSection = styled.section`
    display: flex;
    flex-direction: column;
`;

const LoginFormTag = styled.form`
    display: inline-grid;
    width: 30rem;

    input {
        margin: 0.5rem 0;
        padding: 1rem;
    }
`;

const LoginButton = styled.button`
    margin: 1rem 0;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.8);
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
        background: #d65db1;
    }
`;

const LoginText = styled.h1`
    text-align: center;
    font-size: ${props => (props.small ? '1.5rem' : '3rem')};
    color: rgba(0, 0, 0, 0.8);
`;

const ForgotPassword = styled.button`
    border: transparent;
    width: fit-content;
    font-size: 1rem;
    background: transparent;

    a {
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        cursor: pointer;
    }
`;

const LoginLink = styled.section`
    text-align: center;
    margin-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    padding-top: 1rem;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;

    p {
        margin: 0;
        padding-right: 0.5rem;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

const Warning = styled.section`
    color: red;

    p {
        margin: 0;
        padding: 0;
    }
`;

const Informing = styled.section`
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-size: 0.8rem;

    p {
        margin: 0;
        padding: 0.5rem 2rem;
    }
`;

const LoginContainer = ({ pathname }) => (
    <FormSection>
        {pathname === '/login' ? (
            <LoginForm
                LoginFormTag={LoginFormTag}
                LoginButton={LoginButton}
                LoginText={LoginText}
                ForgotPassword={ForgotPassword}
                LoginLink={LoginLink}
            />
        ) : pathname === '/signup' ? (
            <SignupForm
                LoginFormTag={LoginFormTag}
                LoginButton={LoginButton}
                LoginText={LoginText}
                LoginLink={LoginLink}
                Warning={Warning}
                Informing={Informing}
            />
        ) : (
            <ForgotPasswordForm
                LoginFormTag={LoginFormTag}
                LoginButton={LoginButton}
                LoginText={LoginText}
                Informing={Informing}
            />
        )}
    </FormSection>
);

export default LoginContainer;
