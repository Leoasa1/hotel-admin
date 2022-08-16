import React from 'react';

export default function Guests({ booking }) {
	return (
		<tr>
			<td>{booking.room}</td>
			<td>{booking.guest}</td>
			<td>{new Date(booking.check_in).toLocaleDateString('en-US')}</td>
			<td>{new Date(booking.check_out).toLocaleDateString('en-US')}</td>
		</tr>
	);
}
