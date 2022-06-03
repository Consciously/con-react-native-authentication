import axios from 'axios';

const API_KEY = 'AIzaSyDUA96C-Ns0TZpESsBqOXc6dQX9s3vm6ws';

const authenticate = async (mode, email, password) => {
	const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

	const response = await axios.post(url, {
		email,
		password,
		returnSecureToken: true
	});

	console.log(response.data);
};

export const createUser = async (email, password) => {
	await authenticate('signup', email, password);
};

export const login = async (email, password) => {
	await authenticate('signInWithPassword', email, password);
};
