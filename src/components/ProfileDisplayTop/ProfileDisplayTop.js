import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { ApiProfile } from '../../api/profile';
import { defaultPhoto400 } from '../../constants/defaultPhotos';
import { AppContext } from '../../context/appContext';
import {
    StyledTopSection,
    StyledTopSubSection,
    StyledButtonSection
} from '../../containers/ProfilePrivate/styles';

const defualtProfile = {
    email: '',
    photo400: '',
    firstname: ''
};

const ProfileDisplayTop = ({ me, history }) => {
    const [auth] = useContext(AppContext);
    const [profile, setProfile] = useState(defualtProfile);
    const {
        email,
        photo400,
        cover1000,
        firstname,
        lastname,
        phone,
        website
    } = profile;

    useEffect(() => {
        // will involk only once
        if (me && auth.uuid) {
            ApiProfile(
                axios,
                'get',
                `/api/profile/${auth.uuid}`,
                null,
                profile,
                setProfile,
                null
            );
        }
    }, [auth]);

    return (
        <StyledTopSection bg={cover1000}>
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
        </StyledTopSection>
    );
};

export default withRouter(ProfileDisplayTop);
