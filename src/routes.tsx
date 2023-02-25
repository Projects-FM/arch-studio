import { createBrowserRouter } from 'react-router-dom';
import { About, Contact, Error, Home, Layout, Portfolio } from './pages';

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
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);
