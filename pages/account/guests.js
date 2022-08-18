import { React, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import Guests from '../../components/guest/Guests';
import { API_URL } from '../../config/index';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { parseCookies } from '../../helper';

export default function customers({ guests }) {
	const { user } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push('/');
		}
	});

	if (user) {
		return (
			<Layout>
				<div className='container px-20 py-10'>
					<h2 className='text-3xl font-medium mb-8'>Guests</h2>
					<div className='overflow-x-auto'>
						<table className='table w-full'>
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Email</th>
									<th>Phone</th>
									<th>Registered Date</th>
								</tr>
							</thead>
							<tbody>
								{guests.map((gust, i) => (
									<Guests key={i} guest={gust} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</Layout>
		);
	} else {
		return <div>Not Authorized</div>;
	}
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);
	const res = await fetch(`${API_URL}/guest`, {
		method: 'GET',
		headers: {
			'x-auth-token': `${token}`,
		},
	});
	const guests = await res.json();

	return {
		props: { guests },
	};
}
