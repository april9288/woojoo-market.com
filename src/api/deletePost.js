const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiDeletePost = async (
    axios,
    method,
    url,
    data,
    params,
    feed,
    setFeed
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
        const { uuid } = res.data;
        setFeed(feed.concat(uuid));
    } catch (e) {
        setFeed(...feed);
    }
};
