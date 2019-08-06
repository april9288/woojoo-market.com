export const ApiUserAuth = async (axios, setAuth) => {
	let response = await axios.get(`http://localhost:3001/login`);
	localStorage.setItem('login', response.data.login);
	setAuth(response.data);
};
