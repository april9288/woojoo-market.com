import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import FeedNav from '../../components/FeedNav';
import ProfilePrivate from '../../containers/ProfilePrivate';
import ProfilePublic from '../../containers/ProfilePublic';
import GlobalFooter from '../../components/GlobalFooter';

const Profile = ({ match }) => {
    return (
        <Fragment>
            <FeedNav />
            <Route exact path={`${match.path}`} component={ProfilePrivate} />
            <Route path={`${match.path}/:id`} component={ProfilePublic} />
            <GlobalFooter />
        </Fragment>
    );
};

export default Profile;
