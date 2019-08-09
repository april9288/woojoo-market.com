import React from 'react';
import { Route, Link } from 'react-router-dom';

const Data = () => {
    return <h1>Data</h1>;
};

const Feed = props => {
    // console.log("Feed Comp's match : ", props);
    return (
        <section>
            <h1>Feed Page!!!</h1>
            <Link to="/feed/data">Some Data</Link>
            <Route path="/feed/data" component={Data} />
        </section>
    );
};

export default Feed;
