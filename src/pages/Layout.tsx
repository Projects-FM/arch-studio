import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

export const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
