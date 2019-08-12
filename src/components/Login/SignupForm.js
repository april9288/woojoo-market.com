import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { MasterContext } from '../../Context';
import { ApiUserSignup } from '../../api/auth';

const SignupForm = ({
    LoginFormTag,
    LoginButton,
    LoginText,
    LoginLink,
    Warning,
    Informing
}) => {
    const [auth, setAuth] = useContext(MasterContext);

    const [signupStatus, setSignupStatus] = useState('');
    const [signupUserEmail, setSignupUserEmail] = useState('');
    const [signupUserPassword, setSignupUserPassword] = useState('');
    const [signupUserPassword2, setSignupUserPassword2] = useState('');
    const [duplicateEmail, setDuplicateEmail] = useState(false);

    // after making a request to server, if there's a duplicated email, then it'll reset all the inputs
    if (signupStatus === 'DUPLICATE_EMAIL') {
        setDuplicateEmail(true);
        setSignupUserEmail('');
        setSignupUserPassword('');
        setSignupUserPassword2('');
        setSignupStatus('');
    }

    // handling form submission
    const handleSignup = e => {
        e.preventDefault();

        // make a request to server
        if (
            signupUserPassword === signupUserPassword2 &&
            signupUserPassword.length > 0
        ) {
            ApiUserSignup(
                axios,
                setAuth,
                signupUserEmail,
                signupUserPassword,
                setSignupStatus
            );
        }
    };

    return (
        <LoginFormTag onSubmit={handleSignup}>
            <LoginText>Sign Up</LoginText>
            <input
                type="email"
                value={signupUserEmail}
                onChange={e => setSignupUserEmail(e.target.value.trim())}
                placeholder="Email"
                required
            />
            {duplicateEmail && <Warning>Email Already Exists</Warning>}
            <input
                type="password"
                value={signupUserPassword}
                onChange={e => setSignupUserPassword(e.target.value.trim())}
                placeholder="Password"
                required
            />
            {signupUserPassword.length > 0 && signupUserPassword.length < 3 && (
                <Warning>Password Strength: Weak</Warning>
            )}
            <input
                type="password"
                value={signupUserPassword2}
                onChange={e => setSignupUserPassword2(e.target.value.trim())}
                placeholder="Password Confirm"
                required
            />
            {signupUserPassword !== signupUserPassword2 &&
                signupUserPassword2.length > 0 && (
                    <Warning>Password Do Not Match</Warning>
                )}

            <Informing>
                <p>
                    We don’t spam. By creating an account, you agree to
                    WJM&apos;s Terms and Privacy Policy.
                </p>
            </Informing>

            <LoginButton type="submit">Sign up</LoginButton>
            <LoginLink>
                <p>Already have an account? </p>
                <Link to="/login">Log in</Link>
            </LoginLink>
        </LoginFormTag>
    );
};

export default SignupForm;
