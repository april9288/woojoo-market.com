import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import { TimeCalculator } from '../../api/time';
import {
    StyledSection,
    StyledPhotoSection,
    StyledDetailSection
} from './styles';

const FeedDetail = ({ match }) => {
    const [detail, setDetail] = useState([]);
    const { id } = match.params;
    const {
        email,
        title,
        description,
        brand,
        category,
        color,
        photo100,
        photo400,
        photo550,
        price,
        timestamps
    } = detail;

    console.log('Detail >>>> ', detail);

    useEffect(() => {
        ApiFeed(
            axios,
            'get',
            `/api/postDetail/${id}`,
            null,
            null,
            detail,
            setDetail,
            'SERVER_ERROR'
        );
    }, []);

    return (
        <StyledSection>
            <StyledPhotoSection>
                <img src={photo550} alt={title} />
            </StyledPhotoSection>
            <StyledDetailSection>
                <p>{email}</p>
                <p>{TimeCalculator(timestamps)}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{brand}</p>
                <p>
                    <span>$</span>
                    {price}
                </p>
            </StyledDetailSection>
        </StyledSection>
    );
};

export default FeedDetail;
