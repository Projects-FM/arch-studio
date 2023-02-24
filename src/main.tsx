import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

mapboxgl.accessToken =
	'pk.eyJ1IjoiaWFuY2FybG9zb3J0ZWdhIiwiYSI6ImNrcThncW1rYjAwZ3gybnBrc2EyeGphNWoifQ.jDCs1Sv56p2qalAYsOlLTA';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
