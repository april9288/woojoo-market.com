import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiAuthentication } from '../../api/auth';

const SignupForm = ({
    StyledForm,
    StyledButton,
    StyledText,
    StyledLink,
    StyledWarning,
    StyledInforming
}) => {
    // after submitting sign up form, will check if the user can login or not.
    const [auth, setAuth] = useContext(AppContext);
    const { login, error } = auth;

    if (login) {
        return <Redirect to="/feed" />;
    }

    const defaultUser = {
        email: '',
        password: '',
        password2: ''
    };

    const [user, setUser] = useState(defaultUser);
    const { email, password, password2 } = user;

    const handleSignup = e => {
        e.preventDefault();
        if (password === password2 && password.length > 0) {
            ApiAuthentication(
                axios,
                'POST',
                '/api/signup',
                { email, password },
                auth,
                setAuth,
                'DUPLICATE_VALUE'
            );
        }
    };

    return (
        <StyledForm onSubmit={handleSignup}>
            <StyledText>Sign Up</StyledText>
            <input
                type="email"
                value={email}
                onChange={e =>
                    setUser({ ...user, email: e.target.value.trim() })
                }
                placeholder="Email"
                required
            />
            {error && <StyledWarning>Email Already Exists</StyledWarning>}
            <input
                type="password"
                value={password}
                onChange={e =>
                    setUser({ ...user, password: e.target.value.trim() })
                }
                placeholder="Password"
                required
            />
            {password.length > 0 && password.length < 3 && (
                <StyledWarning>Password Strength: Weak</StyledWarning>
            )}
            <input
                type="password"
                value={password2}
                onChange={e =>
                    setUser({ ...user, password2: e.target.value.trim() })
                }
                placeholder="Password Confirm"
                required
            />
            {password !== password2 && password2.length > 0 && (
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
