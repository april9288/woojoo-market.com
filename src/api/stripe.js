const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiPayment = async (
    axios,
    method,
    url,
    data,
    payment,
    setPayment
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
        const { paymentData } = res.data;
        setPayment(paymentData);
    } catch (error) {
        console.log('error : ', error.response.data);
    }
};
