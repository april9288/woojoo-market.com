import React, { Fragment } from 'react';

import FeedNav from '../../components/FeedNav';
import FeedContainer from '../../containers/FeedContainer';

const Feed = () => {
    return (
        <Fragment>
            <FeedNav />
            <FeedContainer />
        </Fragment>
    );
};

export default Feed;
