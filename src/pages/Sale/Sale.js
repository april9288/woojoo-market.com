/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import GlobalFooter from '../../components/GlobalFooter';
import { defaultData } from '../Like/default.js';
import {
    StyledPageSection,
    StyledSubSection,
    StyledTableSection
} from '../Like/styles';

const Sale = ({ history }) => {
    return (
        <Fragment>
            <FeedNav />
            <StyledPageSection>
                <StyledSubSection>
                    <h1>My Sales</h1>
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

export default withRouter(Sale);
