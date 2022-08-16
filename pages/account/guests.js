import React from 'react';
import Layout from '../../components/layout/Layout';
import Guests from '../../components/guest/Guests';
import { API_URL } from '../../config/index';

export default function customers({ guests }) {
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
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/guest`);
	const guests = await res.json();

	return {
		props: { guests },
	};
}
