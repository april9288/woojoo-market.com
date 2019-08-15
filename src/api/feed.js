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
    ERROR_MESSAGE
) => {
    try {
        const res = await axios({
            method,
            url: `${process.env.API_SERVER_DEV}${url}`,
            data,
            params,
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        });
        const { feedData } = res.data;
        setFeed(feedData);
    } catch (e) {
        setFeed([]);
    }
};
