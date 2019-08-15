import React from 'react';
import { withRouter } from 'react-router-dom';

import { StyledCardSection, StyledTitle, StyledPrice } from './styles';

const Card = ({ id, email, timestamps, photo400, title, price, history }) => {
    return (
        <StyledCardSection
            onClick={() => history.push(`${history.location.pathname}/${id}`)}
        >
            <p>{email}</p>
            <p>{timestamps}</p>
            <img src={photo400} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledPrice>
                <span>$</span>
                {price}
            </StyledPrice>
        </StyledCardSection>
    );
};

export default withRouter(Card);
