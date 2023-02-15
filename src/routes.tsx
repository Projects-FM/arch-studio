import { createBrowserRouter } from 'react-router-dom';
import { AboutUs, Contact, Error, Home, Layout, Portfolio } from './pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'portfolio',
				element: <Portfolio />,
			},
			{
				path: 'about',
				element: <AboutUs />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);
