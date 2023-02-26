import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import AOS from 'aos';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'aos/dist/aos.css';
import './index.css';

mapboxgl.accessToken =
	'pk.eyJ1IjoiaWFuY2FybG9zb3J0ZWdhIiwiYSI6ImNrcThncW1rYjAwZ3gybnBrc2EyeGphNWoifQ.jDCs1Sv56p2qalAYsOlLTA';

AOS.init({
	offset: 200, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
