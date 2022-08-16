import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ title, children }) => {
	const router = useRouter();

	return (
		<div className='inter'>
			<Head>
				<title>{title}</title>
			</Head>
			<div className='drawer drawer-mobile'>
				<input
					id='my-drawer-2'
					type='checkbox'
					className='drawer-toggle'
				/>
				<div className='drawer-content flex flex-col'>
					<Navbar />
					<div>{children}</div>
				</div>
				<div className='drawer-side bg-base-100'>
					<label
						htmlFor='my-drawer-2'
						className='drawer-overlay'
					></label>
					<div className='menu p-4 pt-2 overflow-y-auto w-64 bg-info text-base-content font-bold'>
						<a className='text-xl px-4 py-3' href='/'>
							Hotel Reservation
						</a>
						<ul className='pt-8'>
							<li>
								<Link href='/account/bookings'>
									<a
										className={`${
											router.pathname ===
											'/account/bookings'
												? 'bg-neutral text-white'
												: ''
										} mb-4`}
									>
										Bookings
									</a>
								</Link>
							</li>
							<li>
								<Link href='/account/rooms'>
									<a
										className={`${
											router.pathname === '/account/rooms'
												? 'bg-neutral text-white'
												: ''
										} mb-4`}
									>
										Rooms
									</a>
								</Link>
							</li>
							<li>
								<Link href='/account/guests'>
									<a
										className={`${
											router.pathname ===
											'/account/guests'
												? 'bg-neutral text-white'
												: ''
										} mb-4`}
									>
										Guests
									</a>
								</Link>
							</li>
							<li>
								<Link href='/account/register'>
									<a
										className={`${
											router.pathname ===
											'/account/register'
												? 'bg-neutral text-white'
												: ''
										} mb-4`}
									>
										Register User
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

Layout.defaultProps = {
	title: 'Hotel Reservation',
};

export default Layout;
