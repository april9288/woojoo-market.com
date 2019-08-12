import React, { useState, Fragment } from 'react';
import axios from 'axios';

import { ApiForgotPassword } from '../../api/auth';

const LoginForm = ({ LoginFormTag, LoginButton, LoginText, Informing }) => {
    const [userEmail, setUserEmail] = useState('');
    const [serverResponse, setServerResponse] = useState(false);
    const [emailSent, setemailSent] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        ApiForgotPassword(axios, userEmail, setServerResponse);
    };

    // when there is a response from server, it'll update 'emailSent' context to true
    if (serverResponse) {
        setemailSent(true);
        setServerResponse(false);
    }

    return (
        <LoginFormTag onSubmit={handleLogin}>
            {emailSent ? (
                <LoginText small={true}>
                    We&apos;ve sent a temporary password. Please check your
                    email and reset your password.
                </LoginText>
            ) : (
                <Fragment>
                    <LoginText small={true}>
                        Please enter your email address
                    </LoginText>
                    <input
                        type="email"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value.trim())}
                        placeholder="Your email address"
                        required
                    />
                    <LoginButton type="submit">Submit</LoginButton>
                    <Informing>
                        <p>
                            If the email address exists, we will immediately
                            send you a temporary password. Please check your
                            email and reset your password.
                        </p>
                    </Informing>
                </Fragment>
            )}
        </LoginFormTag>
    );
};

export default LoginForm;
