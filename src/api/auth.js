const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiUserLogin = async (
    axios,
    setAuth,
    email,
    password,
    setLoginStatus
) => {
    try {
        const response = await axios.post(`${SERVER}/api/login`, {
            email,
            password
        });

        const { login, userEmail } = response.data;

        // saving user basic info into 'auth' global context
        setAuth({
            login,
            userEmail
        });
    } catch (e) {
        setLoginStatus(false);
    }
};

export const ApiUserSignup = async (
    axios,
    setAuth,
    email,
    password,
    setSignupStatus
) => {
    try {
        const response = await axios.post(`${SERVER}/api/signup`, {
            email,
            password
        });

        const { login, userEmail } = response.data;

        // saving user basic info into 'auth' global context
        setAuth({
            login,
            userEmail
        });
    } catch (e) {
        setSignupStatus('DUPLICATE_EMAIL');
    }
};

export const ApiForgotPassword = async (axios, email, setServerResponse) => {
    try {
        const response = await axios.post(
            `${SERVER}/api/login/forgotPassword`,
            { email }
        );

        const { status } = response.data;

        // if status is true, then it means the server has already sent an email with a temporary password
        setServerResponse(status);
    } catch (e) {
        // handing an error from server-side
        // for now, I'll just sent 'true'
        setServerResponse(true);
    }
};
