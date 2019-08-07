export const ApiUserLogin = async (axios, setAuth, userEmail, userPassword) => {
	let response = await axios.post(`http://localhost:3001/login`, {
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
	let response = await axios.post(`http://localhost:3001/signup`, {
		signupUserEmail,
		signupUserPassword
	});
	localStorage.setItem('login', response.data.login);
	setAuth(response.data);
};
