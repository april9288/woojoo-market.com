import React, { Fragment } from 'react';

import FeedNav from '../../components/FeedNav';
import SettingContainer from '../../containers/SettingContainer';
import GlobalFooter from '../../components/GlobalFooter';

const Settings = () => {
    return (
        <Fragment>
            <FeedNav />
            <SettingContainer />
            <GlobalFooter />
        </Fragment>
    );
};

export default Settings;
