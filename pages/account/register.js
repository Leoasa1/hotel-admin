import { React, useState, useEffect, useContext } from 'react';
import { API_URL } from '../../config/index';
import Layout from '../../components/layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';

function register() {
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [registered, setRegistered] = useState(Boolean);

	const { user } = useContext(AuthContext);
	const router = useRouter();

	async function submitForm(e) {
		e.preventDefault();

		const res = await fetch(`${API_URL}/user`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ first_name, last_name, email, password }),
		});

		if (res.ok) {
			toast.success('Registered');
			setRegistered(true);
			return;
		} else {
			toast.error('Error');
			return;
		}
	}

	useEffect(() => {
		if (!user) {
			router.push('/');
		}
	});

	if (user) {
		return (
			<Layout>
				<ToastContainer />
				<div className='hero min-h-screen bg-base-200'>
					<div className='inter hero-content text-center'>
						<div className='w-96'>
							<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
								{!registered ? (
									<form
										className='card-body'
										onSubmit={submitForm}
									>
										<h1 className='text-2xl font-bold'>
											Register User
										</h1>
										<div className='form-control'>
											<label className='label'>
												<span className='label-text'>
													First Name
												</span>
											</label>
											<input
												type='text'
												value={first_name}
												placeholder='First Name'
												className='input input-bordered'
												onChange={(e) =>
													setFirstName(e.target.value)
												}
											/>
										</div>
										<div className='form-control'>
											<label className='label'>
												<span className='label-text'>
													Last Name
												</span>
											</label>
											<input
												type='text'
												value={last_name}
												placeholder='Last Name'
												className='input input-bordered'
												onChange={(e) =>
													setLastName(e.target.value)
												}
											/>
										</div>
										<div className='form-control'>
											<label className='label'>
												<span className='label-text'>
													Email
												</span>
											</label>
											<input
												type='email'
												value={email}
												placeholder='email'
												className='input input-bordered'
												onChange={(e) =>
													setEmail(e.target.value)
												}
											/>
										</div>
										<div className='form-control'>
											<label className='label'>
												<span className='label-text'>
													Password
												</span>
											</label>
											<input
												type='password'
												value={password}
												placeholder='password'
												className='input input-bordered'
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
										</div>
										<div className='form-control mt-6'>
											<button
												className='btn btn-primary'
												type='submit'
												value='register'
											>
												Submit
											</button>
										</div>
									</form>
								) : (
									<div className='flex flex-col justify-center text-center p-10'>
										<div className='hero mb-4 text-green-500'>
											<BsFillPatchCheckFill size={40} />
										</div>
										<div className='text-3xl font-bold text-green-500'>
											User Registered
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	} else {
		return <div>Not Authorized</div>;
	}
}

export default register;
