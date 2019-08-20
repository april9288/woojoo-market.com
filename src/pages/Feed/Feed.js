import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import FeedContainer from '../../containers/FeedContainer';
import FeedDetail from '../../containers/FeedDetail';
import GlobalFooter from '../../components/GlobalFooter';

const Feed = ({ match }) => {
    return (
        <Fragment>
            <FeedNav />
            <Route exact path={`${match.path}`} component={FeedContainer} />
            <Route path={`${match.path}/:puuid`} component={FeedDetail} />
            <GlobalFooter />
        </Fragment>
    );
};

export default Feed;
