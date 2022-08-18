import { React, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<div className='navbar sticky top-0 z-20 bg-neutral text-white flex flex-row lg:flex-row-reverse justify-between'>
			<label
				htmlFor='my-drawer-2'
				className='btn btn-primary drawer-button lg:hidden px-10'
			>
				Open drawer
			</label>
			<div className='px-5'>
				<div className='dropdown dropdown-end'>
					<label tabIndex='0' className=''>
						<div className='btn btn-info px-4 py-1'>
							{user ? `${user.first_name}` : ''}
						</div>
					</label>
					<ul
						tabIndex='0'
						className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52 font-bold'
					>
						<li>
							<button onClick={() => logout()}>Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
