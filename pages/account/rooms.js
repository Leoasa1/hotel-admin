import { React, useContext, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import Room from '../../components/room/Room';
import { API_URL } from '../../config/index';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';

export default function rooms({ rooms }) {
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
					<h2 className='text-3xl font-medium mb-8'>Rooms</h2>
					<div className='overflow-x-auto'>
						<table className='table w-full'>
							<thead>
								<tr>
									<th>Name</th>
									<th>Room Size</th>
									<th>Price</th>
									<th>Floor</th>
								</tr>
							</thead>
							<tbody>
								{rooms.map((rom, i) => (
									<Room key={i} room={rom} />
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

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/room`);
	const rooms = await res.json();

	return {
		props: { rooms },
	};
}
