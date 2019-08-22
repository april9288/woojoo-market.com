/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import { ApiPayment } from '../../api/stripe';
import FeedNav from '../../components/FeedNav';
import GlobalFooter from '../../components/GlobalFooter';
import { defaultData } from './default.js';
import {
    StyledPageSection,
    StyledSubSection,
    StyledTableSection
} from '../Like/styles';

const Cart = ({ history }) => {
    const [payment, setPayment] = useState({});

    // for stripe variables
    const price100 = 141600;
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
        <Fragment>
            <FeedNav />
            <StyledPageSection>
                <StyledSubSection>
                    <h1>My Cart</h1>
                    <StyledTableSection>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Photo</th>
                                    <th>Seller</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                {defaultData.map(item => {
                                    const {
                                        title,
                                        image,
                                        seller,
                                        price,
                                        quantity,
                                        status,
                                        url,
                                        profile
                                    } = item;
                                    return (
                                        <tr key={title}>
                                            <td>{title}</td>
                                            <td>
                                                <img
                                                    role="button"
                                                    alt={title}
                                                    src={image}
                                                    onClick={() =>
                                                        history.push(url)
                                                    }
                                                />
                                            </td>
                                            <td
                                                role="button"
                                                onClick={() =>
                                                    history.push(profile)
                                                }
                                            >
                                                <h5>{seller}</h5>
                                            </td>
                                            <td>{`$${price}`}</td>
                                            <td>{quantity}</td>
                                            <td>{status}</td>
                                            <td>
                                                <button type="button">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </StyledTableSection>
                    <StyledTableSection att="total">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h3>Total</h3>
                                    </td>
                                    <td>{`$${1000}`}</td>
                                    <td>
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </StyledTableSection>
                </StyledSubSection>
            </StyledPageSection>
            <GlobalFooter />
        </Fragment>
    );
};

export default withRouter(Cart);
