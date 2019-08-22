import React, { Fragment, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AppContext } from '../../context/appContext';

import FeedNav from '../../components/FeedNav';
import ProfilePrivate from '../../containers/ProfilePrivate';
import ProfilePublic from '../../containers/ProfilePublic';
import GlobalFooter from '../../components/GlobalFooter';

const Profile = ({ match, location }) => {
    const [auth] = useContext(AppContext);
    useEffect(() => {}, [auth]);

    // if it's true, then it's my profile.
    // will redirect the user to the private profile page
    const myProfile = location.pathname === `/profile/${auth.uuid}`;

    return (
        <Fragment>
            <FeedNav />
            <Route exact path={`${match.path}`} component={ProfilePrivate} />
            <Route
                path={`${match.path}/:uuid`}
                render={() =>
                    myProfile ? (
                        <Redirect to={`${match.path}`} />
                    ) : (
                        <ProfilePublic />
                    )
                }
            />
            <GlobalFooter />
        </Fragment>
    );
};

export default Profile;
