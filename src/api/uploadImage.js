const SERVER =
    process.env.NODE_ENV === 'development'
        ? process.env.API_SERVER_DEV
        : process.env.API_SERVER_PROD;

export const ApiUploadImage = async (axios, formData) => {
    try {
        const response = await axios.post(
            `${SERVER}/api/uploadImage`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFwcmlsOTI4OEBnbWFpbC5jb20iLCJpYXQiOjE1NjU0ODAwODgsImV4cCI6MTU2NjA4NDg4OH0.zLuSCxZaYEz5Sb9RRYOgPuVQ-E1RUxJpAAjEG8q2PZs'
                }
            }
        );
        console.log('endpoint testing success : ', response.data);
    } catch (err) {
        console.log('endpoint testing fail : ', err);
    }
};
