import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar/Navbar';

export const Layout = ({ title, children }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<div>{children}</div>
		</div>
	);
};

Layout.defaultProps = {
	title: 'Hotel Reservation',
};
