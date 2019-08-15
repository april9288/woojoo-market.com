import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import Card from '../../components/Card';
import { StyledSection } from './styles';

const FeedContainer = () => {
    const [feed, setFeed] = useState([]);
    console.log('feed container >>>>>>', feed);

    useEffect(() => {
        ApiFeed(
            axios,
            'get',
            '/api/listPost',
            null,
            { offset: '0' },
            feed,
            setFeed,
            'SERVER_ERROR'
        );
    }, []);

    const CardComponent = feed.map(item => <Card key={item.id} {...item} />);

    return <StyledSection>{CardComponent}</StyledSection>;
};

export default FeedContainer;
