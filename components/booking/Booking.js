import React from 'react';

export default function Guests({ booking }) {
	return (
		<tr>
			<td>
				{booking.room.room_type} {booking.room.bed}
			</td>
			<td>
				{booking.guest.first_name} {booking.guest.last_name}
			</td>
			<td>{new Date(booking.check_in).toLocaleDateString('en-US')}</td>
			<td>{new Date(booking.check_out).toLocaleDateString('en-US')}</td>
		</tr>
	);
}
