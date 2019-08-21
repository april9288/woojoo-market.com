/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import { TimeCalculator } from '../../api/time';
import {
    StyledSection,
    StyledPhotoPreviewSection,
    StyledPhotoSection,
    StyledRightSection,
    StyledProfileSection,
    StyledItemSection,
    StyledDetail,
    StyledButtons
} from './styles';

import { defaultPhoto100 } from '../../constants/defaultPhotos';

const FeedDetail = ({ match, history }) => {
    const [detail, setDetail] = useState([]);
    const { puuid } = match.params;
    const {
        id,
        uuid,
        email,
        user_private_id,
        user_public_id,
        user_photo100,
        photo550,
        photo100,
        title,
        description,
        category,
        brand,
        status,
        condition,
        quantity,
        price,
        timestamps
    } = detail;

    useEffect(() => {
        ApiFeed(
            axios,
            'get',
            `/api/postDetail/${puuid}`,
            null,
            null,
            detail,
            setDetail,
            'SERVER_ERROR'
        );
    }, []);

    return (
        <StyledSection>
            <StyledPhotoPreviewSection>
                <img src={photo100} alt={title} />
            </StyledPhotoPreviewSection>
            <StyledPhotoSection>
                <img src={photo550} alt={title} />
            </StyledPhotoSection>
            <StyledRightSection>
                <StyledProfileSection
                    onClick={() => history.push(`/profile/${user_public_id}`)}
                >
                    <img
                        src={user_photo100 || defaultPhoto100}
                        alt="user 100"
                    />
                    <section>
                        <h4>{email}</h4>
                        <p>{TimeCalculator(timestamps)}</p>
                    </section>
                </StyledProfileSection>

                <StyledItemSection>
                    <h1>{title}</h1>
                    <p>{`$${price}`}</p>
                    <section>
                        <h5>Available Quantity</h5>
                        <div>{quantity}</div>
                    </section>
                </StyledItemSection>

                <StyledDetail>
                    <p>{`Description : ${description}`}</p>
                    <p>{`Category : ${category}`}</p>
                    <p>{`Brand : ${brand}`}</p>
                    <p>{`Condition : ${condition}`}</p>
                </StyledDetail>

                <StyledButtons>
                    <button type="button">Buy Now</button>
                    <button type="button">Add to Cart</button>
                </StyledButtons>
            </StyledRightSection>
        </StyledSection>
    );
};

export default withRouter(FeedDetail);
