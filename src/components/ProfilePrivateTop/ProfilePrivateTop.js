import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { ApiProfile } from '../../api/profile';
import { defaultPhoto400 } from '../../constants/defaultPhotos';
import {
    StyledTopSubSection,
    StyledButtonSection
} from '../../containers/ProfilePrivate/styles';

const defualtProfile = {
    email: '',
    photo400: '',
    firstname: ''
};

const ProfilePrivateTop = ({ history }) => {
    const [profile, setProfile] = useState(defualtProfile);
    const { email, photo400, firstname } = profile;

    useEffect(() => {
        // involking the function only once
        if (email === '') {
            ApiProfile(
                axios,
                'get',
                '/api/profile',
                null,
                profile,
                setProfile,
                null
            );
        }
    }, [profile]);

    return (
        <Fragment>
            <StyledTopSubSection>
                <img
                    src={photo400 || defaultPhoto400}
                    alt="my-pic"
                    width="400px"
                />
                <section>
                    <p>{firstname}</p>
                    <p>{email}</p>
                </section>
            </StyledTopSubSection>
            <StyledButtonSection>
                <button type="button" onClick={() => history.push('/settings')}>
                    Edit Profile
                </button>
            </StyledButtonSection>
        </Fragment>
    );
};

export default withRouter(ProfilePrivateTop);
