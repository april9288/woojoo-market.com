import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { StyledDropDownButton, StyledDropDownMenu } from './styles';

const DropDownMenu = ({ showMenu, show }) => (
    <Fragment>
        <StyledDropDownButton type="button" onClick={showMenu}>
            Show Menu &#9660;
        </StyledDropDownButton>
        {show && (
            <StyledDropDownMenu>
                <Link to="/post">Sell on WJM</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/settings">Account Settings</Link>
                <Link to="/logout">Logout</Link>
            </StyledDropDownMenu>
        )}
    </Fragment>
);

export default DropDownMenu;
