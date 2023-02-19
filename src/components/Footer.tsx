import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer
			className='
				bg-very-light-gray flex flex-col items-center mt-[8rem]
				md:flex-row md:gap-10 md:w-[80%] relative lg:gap-20
				'>
			<Link to='/'>
				<div className='bg-black-custom p-7 lg:py-[5rem] lg:px-[3rem] md:py-10 translate-y-[-50px] md:translate-y-0'>
					<img src='/src/assets/logo-white.svg' alt='Logo' />
				</div>
			</Link>
			<ul className='flex flex-col gap-8 md:flex-row'>
				<li className='text-gray font-bold text-center'>
					<Link to='portfolio'>Portfolio</Link>
				</li>
				<li className='text-gray font-bold text-center'>
					<Link to='about'>About Us</Link>
				</li>
				<li className='text-gray font-bold text-center'>
					<Link to='contact'>Contact</Link>
				</li>
			</ul>

			<Link
				to='portfolio'
				className='
					bg-black-custom text-[white] flex gap-4 items-center p-7 lg:px-10 font-bold
					hover:bg-gray transition duration-1000 w-[80%] justify-center text-[15px] mx-auto my-10
					md:my-0 md:w-auto md:absolute right-[-20%]
					'>
				See Our Portfolio
				<img src='/src/assets/icons/icon-arrow.svg' alt='Arrow icon' />
			</Link>
		</footer>
	);
};
