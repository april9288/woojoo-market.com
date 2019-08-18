import React from 'react';

import { StyledSection } from './styles';

const ProfilePublic = ({ match }) => {
    const { id } = match.params;
    return <StyledSection>{`Profile : ${id}`}</StyledSection>;
};

export default ProfilePublic;
