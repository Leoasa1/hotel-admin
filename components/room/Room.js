import React from 'react';

export default function roomInfo({ room }) {
	return (
		<tr>
			<td>{room._id}</td>
			<td>
				{room.room_type} - {room.bed} bed
			</td>
			<td>{room.room_size} sq ft</td>
			<td>${room.price}</td>
			<td>{room.floor}</td>
		</tr>
	);
}
