/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			red: '#df5858',
			gray: '#7f8490',
			black: '#1b1d23',
			'dark-blue': '#1b1d23',
			'dark-gray': '#60636c',
			'light-gray': '#c9cdd9',
			'very-light-gray': '#f0f0f5',
		},
	},
	plugins: [],
};
