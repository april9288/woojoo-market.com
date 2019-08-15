import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import FeedContainer from '../../containers/FeedContainer';
import FeedDetail from '../../containers/FeedDetail';

const Feed = ({ match }) => {
    return (
        <Fragment>
            <FeedNav />
            <Route exact path={`${match.path}`} component={FeedContainer} />
            <Route path={`${match.path}/:id`} component={FeedDetail} />
        </Fragment>
    );
};

export default Feed;
