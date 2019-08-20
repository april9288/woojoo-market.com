import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import FeedPost from '../../containers/FeedPost';
import GlobalFooter from '../../components/GlobalFooter';

const Post = () => {
    return (
        <Fragment>
            <FeedNav />
            <Route path="/post" component={FeedPost} />
            <GlobalFooter />
        </Fragment>
    );
};

export default Post;
