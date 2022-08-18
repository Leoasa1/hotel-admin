import { React, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import Booking from '../../components/booking/Booking';
import { API_URL } from '../../config/index';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { parseCookies } from '../../helper';

export default function Reservations({ bookings }) {
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
					<h2 className='text-3xl font-medium mb-8'>Bookings</h2>
					<div className='overflow-x-auto'>
						<table className='table w-full'>
							<thead>
								<tr>
									<th>Room ID</th>
									<th>Guests ID</th>
									<th>Check In</th>
									<th>Check Out</th>
								</tr>
							</thead>
							<tbody>
								{bookings.map((bking, i) => (
									<Booking key={i} booking={bking} />
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
	const res = await fetch(`${API_URL}/booking`, {
		method: 'GET',
		headers: {
			'x-auth-token': `${token}`,
		},
	});
	const bookings = await res.json();
	return {
		props: { bookings },
	};
}
