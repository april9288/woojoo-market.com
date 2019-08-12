const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiUserLogin = async (axios, setAuth, userEmail, userPassword) => {
    const response = await axios.post(`${SERVER}/login`, {
        userEmail,
        userPassword
    });
    localStorage.setItem('login', response.data.login);
    setAuth(response.data);
};

export const ApiUserSignup = async (
    axios,
    setAuth,
    signupUserEmail,
    signupUserPassword
) => {
    const response = await axios.post(`${SERVER}/signup`, {
        signupUserEmail,
        signupUserPassword
    });
    localStorage.setItem('login', response.data.login);
    setAuth(response.data);
};
