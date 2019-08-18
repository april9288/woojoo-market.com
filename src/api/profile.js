const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

// This is resuable for Login, Signup, Logout and basic auth checking
export const ApiProfile = async (
    axios,
    method,
    url,
    data,
    profile,
    setProfile,
    ERROR_MESSAGE
) => {
    try {
        const res = await axios({
            method,
            url: `${SERVER}${url}`,
            data,
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        });

        setProfile({ ...res.data });
    } catch (e) {
        setProfile({
            ...profile,
            error: ERROR_MESSAGE
        });
    }
};
