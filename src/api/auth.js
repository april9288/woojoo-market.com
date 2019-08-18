import defaultContext from '../context/defaultContext';

const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

// This is resuable for Login, Signup, Logout and basic auth checking
export const ApiAuthentication = async (
    axios,
    method,
    url,
    data,
    auth,
    setAuth,
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
        const { login, userEmail, photo100 } = res.data;
        setAuth({
            login,
            email: userEmail,
            photo100,
            error: null
        });
    } catch (e) {
        const { login } = e.response.data;
        setAuth({
            ...defaultContext,
            login,
            error: ERROR_MESSAGE
        });
    }
};

export const ApiForgotPassword = async (axios, email, setServerResponse) => {
    try {
        const res = await axios.post(`${SERVER}/api/login/forgotPassword`, {
            email
        });

        const { status } = res.data;

        // if status is true, then it means the server has already sent an email with a temporary password
        setServerResponse(status);
    } catch (e) {
        // handing an error from server-side
        // for now, I'll just sent 'true'
        setServerResponse(true);
    }
};
