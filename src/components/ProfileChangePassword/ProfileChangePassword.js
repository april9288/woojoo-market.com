import React, { useState } from 'react';
import axios from 'axios';

import { ApiProfile } from '../../api/profile';
import {
    defaultChangePasswordState,
    defaultChangePasswordInputs
} from '../../containers/SettingContainer/default';
import {
    StyledRightSection,
    StyledButton,
    StyledCell,
    StyledKey,
    StyledInput,
    StyledWarning,
    StyledInforming
} from '../../containers/SettingContainer/styles';

const changePassword = () => {
    const [profile, setProfile] = useState(defaultChangePasswordState);
    const { newPassword, newPassword2, status } = profile;

    const handleSubmit = () => {
        if (newPassword === newPassword2 && newPassword.length > 2) {
            // only if the new password's length is longger than 2
            // and the two password inputs are the same,
            ApiProfile(
                axios,
                'patch',
                '/api/profile/password',
                {
                    newPassword
                },
                profile,
                setProfile,
                null
            );
        }
    };

    // eslint-disable-next-line consistent-return
    const handleErrorMessage = (db, pw1, pw2) => {
        if (db === 'newPassword') {
            if (pw1.length > 0 && pw1.length < 3) {
                return <StyledWarning>Password Strength: Weak</StyledWarning>;
            }
        } else if (db === 'newPassword2') {
            if (pw1 !== pw2 && pw2.length > 0) {
                return <StyledWarning>Password Do Not Match</StyledWarning>;
            }
        }
    };

    return (
        <StyledRightSection>
            <p>Change Password</p>
            {defaultChangePasswordInputs.map(item => {
                const { title, type, db, placeholder } = item;
                return (
                    <StyledCell key={db}>
                        <StyledKey att={db}>{title}</StyledKey>
                        <StyledInput att={db}>
                            <input
                                type={type}
                                placeholder={placeholder}
                                value={profile[db] ? profile[db] : ''}
                                onChange={e =>
                                    setProfile({
                                        ...profile,
                                        [db]: e.target.value
                                    })
                                }
                            />
                            {!status &&
                                handleErrorMessage(
                                    db,
                                    newPassword,
                                    newPassword2
                                )}
                        </StyledInput>
                    </StyledCell>
                );
            })}
            <StyledButton att={status}>
                <button type="button" onClick={handleSubmit}>
                    {status === true ? 'Updated' : 'Change'}
                </button>
            </StyledButton>
        </StyledRightSection>
    );
};

export default changePassword;
