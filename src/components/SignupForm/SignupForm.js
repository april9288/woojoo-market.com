import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiUserSignup } from '../../api/auth';

const SignupForm = ({
    StyledForm,
    StyledButton,
    StyledText,
    StyledLink,
    StyledWarning,
    StyledInforming
}) => {
    const [auth, setAuth] = useContext(AppContext);

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
        <StyledForm onSubmit={handleSignup}>
            <StyledText>Sign Up</StyledText>
            <input
                type="email"
                value={signupUserEmail}
                onChange={e => setSignupUserEmail(e.target.value.trim())}
                placeholder="Email"
                required
            />
            {duplicateEmail && (
                <StyledWarning>Email Already Exists</StyledWarning>
            )}
            <input
                type="password"
                value={signupUserPassword}
                onChange={e => setSignupUserPassword(e.target.value.trim())}
                placeholder="Password"
                required
            />
            {signupUserPassword.length > 0 && signupUserPassword.length < 3 && (
                <StyledWarning>Password Strength: Weak</StyledWarning>
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
                    <StyledWarning>Password Do Not Match</StyledWarning>
                )}

            <StyledInforming>
                <p>
                    We don’t spam. By creating an account, you agree to
                    WJM&apos;s Terms and Privacy Policy.
                </p>
            </StyledInforming>

            <StyledButton type="submit">Sign up</StyledButton>
            <StyledLink>
                <p>Already have an account? </p>
                <Link to="/login">Log in</Link>
            </StyledLink>
        </StyledForm>
    );
};

export default SignupForm;
