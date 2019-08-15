import React, { Fragment, useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiUserLogout } from '../../api/auth';

const Logout = () => {
    // const [auth, setAuth] = useContext(AppContext);
    // console.log(auth);
    // const [logoutStatus, setLogoutStatus] = useState(false);

    // if (logoutStatus) {
    //     return <Redirect to="/" />;
    // }

    // ApiUserLogout(axios, setAuth, setLogoutStatus);

    return <section>Logging Out</section>;
};

export default Logout;
