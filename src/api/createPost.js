const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiCreatePost = async (axios, formData, post, setPost) => {
    try {
        const res = await axios.post(`${SERVER}/api/createPost`, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            }
        });

        const { id } = res.data.data;
        setPost({
            ...post,
            success: id
        });
    } catch (err) {
        setPost({
            ...post,
            error: err.response.data.err.message
        });
    }
};
