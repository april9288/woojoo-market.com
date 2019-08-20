import React from 'react';

import { StyledSection, StyledSubSection, StyledText } from './styles';

const GlobalFooter = () => {
    return (
        <StyledSection>
            <StyledSubSection>
                <StyledText att="Title">WooJoo Market</StyledText>
                <StyledText att="Description">
                    © 2019 Jong-Ho James Kim All Rights Reserved
                </StyledText>
            </StyledSubSection>
        </StyledSection>
    );
};

export default GlobalFooter;
