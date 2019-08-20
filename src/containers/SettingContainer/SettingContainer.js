import React, { useState } from 'react';

import ProfileEdit from '../../components/ProfileEdit';
import ChangePassword from '../../components/ProfileChangePassword';
import DeleteAccount from '../../components/ProfileDeleteAccount';
import { defaultMenu } from './default';
import {
    StyledWrapperSection,
    StyledSection,
    StyledLeftSection,
    StyledMenu
} from './styles';

const SettingContainer = () => {
    const [menu, setMenu] = useState('Edit Profile');

    let rightSection;
    switch (menu) {
        case 'Edit Profile':
            rightSection = <ProfileEdit />;
            break;
        case 'Change Password':
            rightSection = <ChangePassword />;
            break;
        case 'Delete Account':
            rightSection = <DeleteAccount />;
            break;
        default:
            rightSection = null;
            break;
    }

    const changeMenu = e => {
        // changing menu
        setMenu(e);
    };

    return (
        <StyledWrapperSection>
            <StyledSection>
                <StyledLeftSection>
                    <p>Account Settings</p>
                    {defaultMenu.map(oneMenu => (
                        <StyledMenu
                            key={oneMenu}
                            onClick={() => changeMenu(oneMenu)}
                        >
                            {oneMenu}
                        </StyledMenu>
                    ))}
                </StyledLeftSection>
                {rightSection}
            </StyledSection>
        </StyledWrapperSection>
    );
};

export default SettingContainer;
