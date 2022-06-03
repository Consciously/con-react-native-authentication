import axios from 'axios';

const API_KEY = 'AIzaSyDUA96C-Ns0TZpESsBqOXc6dQX9s3vm6ws';

export const createUser = async (email, password) => {
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
		{
			email,
			password,
			returnSecureToken: true
		}
	);
};
