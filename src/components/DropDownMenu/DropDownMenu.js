import React, { Fragment, useContext, useEffect } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';

import { AppContext } from '../../context/appContext';
import { ApiAuthentication } from '../../api/auth';
import { StyledDropDownButton, StyledDropDownMenu } from './styles';

const DropDownMenu = ({ showMenu, show, history }) => {
    const [auth, setAuth] = useContext(AppContext);

    const logout = () => {
        ApiAuthentication(
            axios,
            'get',
            '/api/logout',
            null,
            auth,
            setAuth,
            null
        );

        return history.push('/');
    };

    return (
        <Fragment>
            <StyledDropDownButton type="button" onClick={showMenu}>
                Show Menu &#9660;
            </StyledDropDownButton>
            {show && (
                <StyledDropDownMenu>
                    <Link to="/post">Sell on WJM</Link>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/settings">Account Settings</Link>
                    <button type="button" onClick={logout}>
                        Logout
                    </button>
                </StyledDropDownMenu>
            )}
        </Fragment>
    );
};

export default withRouter(DropDownMenu);
