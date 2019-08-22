import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiProfile } from '../../api/profile';

import { StyledSection } from './styles';

const FollowButton = ({ groupA, publicUUID, UnfollowFunc, FollowFunc }) => {
    // group A => People who I'm following now
    // publicUUID => this person's public user id
    const [profile, setProfile] = useState([]);

    // this is user's private id
    const { id } = profile;

    useEffect(() => {
        ApiProfile(
            axios,
            'get',
            `/api/profile/${publicUUID}`,
            null,
            profile,
            setProfile,
            null
        );
    }, [publicUUID]);

    // if result.length === 0, then I'm not following this person
    // if result.length === 1, then I'm already following this person
    const result = groupA.filter(item => item.followed === id);

    return (
        <StyledSection att={result.length}>
            {result.length === 1 ? (
                // I'm already following this person
                <button type="button" onClick={() => UnfollowFunc(id)}>
                    Following
                </button>
            ) : (
                // I'm not following this person.
                // so, if I click it, then I will follow this person
                <button type="button" onClick={() => FollowFunc(id)}>
                    Follow
                </button>
            )}
        </StyledSection>
    );
};

export default FollowButton;
