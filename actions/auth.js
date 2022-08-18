import { USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import axios from 'axios';
import setToken from '../utils/setToken';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setToken(localStorage.token);
	}

	try {
		const res = await axios.get('/auth');

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('/auth', body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(error.msg, 'danger'));
		}

		dispatch({
			type: LOGIN_FAIL,
		});
	}
};

// Logout
export const logout = () => ({ type: LOGOUT });
