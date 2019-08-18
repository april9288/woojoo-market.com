import React, { Fragment } from 'react';

import FeedNav from '../../components/FeedNav';
import SettingContainer from '../../containers/SettingContainer';

const Settings = () => {
    return (
        <Fragment>
            <FeedNav />
            <SettingContainer />
        </Fragment>
    );
};

export default Settings;
