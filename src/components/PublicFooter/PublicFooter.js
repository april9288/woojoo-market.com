import React from 'react';

import { StyledSection, StyledText } from './styles';

const PublicFooter = () => (
    <StyledSection>
        <StyledText att1={true}>WooJoo Market</StyledText>
        <StyledText att2={true}>
            © 2019 Jong-Ho James Kim All Rights Reserved
        </StyledText>
    </StyledSection>
);

export default PublicFooter;
