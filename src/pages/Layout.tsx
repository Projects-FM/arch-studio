import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const Layout = () => {
	return (
		<div className='max-w-[1110px] m-auto relative'>
			<ScrollRestoration />
			<Navbar />
			<div className='md:mx-20 lg:mx-0'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};
