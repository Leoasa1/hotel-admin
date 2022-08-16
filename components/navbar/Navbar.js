import React from 'react';

const Navbar = () => {
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
					<label
						tabIndex='0'
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='w-10 rounded-full border-2'>
							<div className='px-2 pt-3'>JD</div>
						</div>
					</label>
					<ul
						tabIndex='0'
						className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-info rounded-box w-52 text-base-content'
					>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
