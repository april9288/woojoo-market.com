/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable camelcase */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { TimeCalculator } from '../../api/time';
import {
    StyledCardSection,
    StyledProfileSection,
    StyledItemSection
} from './styles';
import { defaultPhoto100 } from '../../constants/defaultPhotos';

const Card = ({
    id,
    uuid,
    email,
    user_private_id,
    user_public_id,
    user_photo100,
    photo400,
    title,
    price,
    category,
    status,
    timestamps,
    history
}) => {
    return (
        <StyledCardSection>
            <StyledProfileSection>
                <img src={user_photo100 || defaultPhoto100} alt="user 100" />
                <section>
                    <h4>{email}</h4>
                    <p>{TimeCalculator(timestamps)}</p>
                </section>
            </StyledProfileSection>
            <StyledItemSection
                onClick={() =>
                    history.push(`${history.location.pathname}/${uuid}`)
                }
            >
                <img src={photo400} alt={title} />
                <section>
                    <h3>{title}</h3>
                    <p>{`$${price}`}</p>
                </section>
            </StyledItemSection>
        </StyledCardSection>
    );
};

export default withRouter(Card);
