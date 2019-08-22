/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import { ApiFeed } from '../../api/feed';
import { ApiPayment } from '../../api/stripe';
import { TimeCalculator } from '../../api/time';
import {
    StyledSection,
    StyledPhotoPreviewSection,
    StyledPhotoSection,
    StyledRightSection,
    StyledProfileSection,
    StyledItemSection,
    StyledDetail,
    StyledButtonSection,
    StyledButton
} from './styles';

import { defaultPhoto100 } from '../../constants/defaultPhotos';

const FeedDetail = ({ match, history }) => {
    // this post's uuid
    const { puuid } = match.params;

    const [detail, setDetail] = useState([]);
    const [payment, setPayment] = useState({});

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

    // for stripe variables
    const price100 = price * 100;
    const stripeKey = 'pk_test_7R28MGHsBVbfDHxK29d7caPS006mDzfOV7';

    // handling stripe payment result
    const handleToken = token => {
        const paymentData = {
            amount: price100,
            token
        };
        ApiPayment(
            axios,
            'post',
            '/api/payment',
            paymentData,
            payment,
            setPayment
        );
    };

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

                <StyledButtonSection>
                    <StyledButton type="button">Add to Cart</StyledButton>
                </StyledButtonSection>

                <StripeCheckout
                    token={handleToken}
                    stripeKey={stripeKey}
                    currency="USD"
                    name="WooJoo Market"
                    description="Pay with Stripe"
                    image="https://woojoo.s3-us-west-1.amazonaws.com/logo1.png"
                    label="Pay with Stripe"
                    amount={price100}
                />
            </StyledRightSection>
        </StyledSection>
    );
};

export default withRouter(FeedDetail);
