import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { ApiProfile } from '../../api/profile';
import { defaultDeleteState } from '../../containers/SettingContainer/default';
import {
    StyledRightSection,
    StyledButton
} from '../../containers/SettingContainer/styles';

const DeleteAccount = ({ history }) => {
    const [profile, setProfile] = useState(defaultDeleteState);

    const handleSubmit = () => {
        // will delete the account and delete the cookie
        ApiProfile(
            axios,
            'delete',
            '/api/profile',
            null,
            profile,
            setProfile,
            null
        );
    };

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (profile.status) {
            // if the result from the server is 'true', then will go ahead and redirect the user to the '/' page.
            return history.push('/');
        }
    }, [profile]);

    return (
        <StyledRightSection>
            <p>Delete Account</p>
            Are you sure you want to delete your account? Please click the
            button to proceed.
            <StyledButton>
                <button type="button" onClick={handleSubmit}>
                    Delete
                </button>
            </StyledButton>
        </StyledRightSection>
    );
};

export default withRouter(DeleteAccount);
