import cookie from 'cookie';
import { API_URL } from '../../config/index';

export default async (req, res) => {
	if (req.method === 'POST') {
		const { email, password } = req.body;

		console.log(API_URL);
		const expressRes = await fetch(`${API_URL}/auth`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await expressRes.json();

		if (expressRes.ok) {
			// Set Cookie
			console.log(data);
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('token', data.token, {
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					maxAge: 60 * 60 * 24 * 7, // 1 week
					sameSite: 'strict',
					path: '/',
				})
			);

			res.status(200).json({ user: data });
		} else {
			res.status(data.statusCode).json({
				message: data.message[0].messages[0].message,
			});
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
};
