/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import GlobalFooter from '../../components/GlobalFooter';
import { defaultData } from './default.js';
import {
    StyledPageSection,
    StyledSubSection,
    StyledTableSection
} from './styles';

const Like = ({ history }) => {
    return (
        <Fragment>
            <FeedNav />
            <StyledPageSection>
                <StyledSubSection>
                    <h1>My Likes</h1>
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
                                            <td>
                                                <button type="button">
                                                    Add to Cart
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </StyledTableSection>
                </StyledSubSection>
            </StyledPageSection>
            <GlobalFooter />
        </Fragment>
    );
};

export default withRouter(Like);
