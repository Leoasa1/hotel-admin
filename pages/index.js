import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../config/index';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import AuthContext from '../context/AuthContext';

const index = () => {
	// const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login, error } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<>
			<ToastContainer />
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content text-center'>
					<div className='w-96'>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<form className='card-body' onSubmit={handleSubmit}>
								<h1 className='text-5xl font-bold'>Login</h1>
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
										value='login'
									>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
