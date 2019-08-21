import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import Card from '../../components/Card';
import { StyledSection, StyledLoadMore } from './styles';

const defaultScroll = {
    offset: 0,
    loading: false
};

const FeedContainer = () => {
    const [feed, setFeed] = useState([]);
    const [scroll, setScroll] = useState(defaultScroll);
    const { offset, loading } = scroll;

    console.log('feeed : ', feed);

    const loadMore = () => {
        setScroll({ ...scroll, loading: true });
        ApiFeed(
            axios,
            'get',
            '/api/listPost',
            null,
            { offset },
            feed,
            setFeed,
            'SERVER_ERROR',
            setScroll
        );
    };

    useEffect(() => {
        // will involk it only one time
        if (feed.length === 0) {
            loadMore();
        }
    }, []);

    const CardComponent = feed.map(item => <Card key={item.id} {...item} />);

    return (
        <StyledSection>
            {CardComponent}
            {feed.length > 0 && (
                <StyledLoadMore type="button" onClick={loadMore}>
                    {loading ? (
                        <section>Loading Now...</section>
                    ) : (
                        <section>More</section>
                    )}
                </StyledLoadMore>
            )}
        </StyledSection>
    );
};

export default FeedContainer;
