import React from 'react';

export default function Guests({ guest }) {
	return (
		<tr>
			<td>{guest._id}</td>
			<td>
				{guest.first_name} {guest.last_name}
			</td>
			<td>{guest.email}</td>
			<td>{guest.phone}</td>
			<td>{new Date(guest.date).toLocaleDateString('en-US')}</td>
		</tr>
	);
}
