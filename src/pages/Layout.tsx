import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const Layout = () => {
	return (
		<div className='max-w-[1110px] m-auto'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
