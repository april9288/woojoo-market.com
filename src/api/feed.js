const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiFeed = async (
    axios,
    method,
    url,
    data,
    params,
    feed,
    setFeed,
    ERROR_MESSAGE,
    setScroll
) => {
    try {
        const res = await axios({
            method,
            url: `${SERVER}${url}`,
            data,
            params,
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        });
        const { feedData } = res.data;

        if (setScroll) {
            const { offset } = params;
            setFeed(feed.concat(feedData));
            setScroll({ loading: false, offset: offset + 4 });
        } else {
            setFeed(feedData);
        }
    } catch (e) {
        setFeed([]);
    }
};
