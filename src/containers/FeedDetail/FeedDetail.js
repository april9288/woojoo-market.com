import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ApiFeed } from '../../api/feed';
import { StyledSection } from './styles';

const FeedDetail = ({ match }) => {
    const [detail, setDetail] = useState([]);
    const { id } = match.params;

    console.log('Detail >>>> ', detail);

    useEffect(() => {
        ApiFeed(
            axios,
            'get',
            `/api/postDetail/${id}`,
            null,
            null,
            detail,
            setDetail,
            'SERVER_ERROR'
        );
    }, []);

    return <StyledSection>Feed Detail!!!</StyledSection>;
};

export default FeedDetail;
