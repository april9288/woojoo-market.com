import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import Nav from '../components/Public/Nav';
import Home from '../components/Public/Home';

const Public = () => {
    return (
        <Fragment>
            <Nav />
            <Home />
        </Fragment>
    );
};

export default Public;
