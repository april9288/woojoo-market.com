import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import FeedPost from '../../containers/FeedPost';

const Post = () => {
    return (
        <Fragment>
            <FeedNav />
            <Route path="/post" component={FeedPost} />
        </Fragment>
    );
};

export default Post;
