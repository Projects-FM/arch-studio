import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, HamburgerIcon, LogoIcon } from '../icons';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav
			className='
			p-8 flex justify-between items-center relative
			md:py-14 md:px-20 md:gap-[6rem] md:justify-start
			lg:py-14 xl:px-0
		'>
			<NavLink
				to='/'
				data-aos='fade-right'
				onClick={() => {
					if (!isMenuOpen) return;
					toggleMenu();
				}}>
				<LogoIcon color='#1B1D23' />
			</NavLink>
			<button onClick={toggleMenu} className='md:hidden'>
				{isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
			</button>
			<ul
				className={`
				${isMenuOpen ? 'block' : 'hidden'}
				bg-very-light-gray text-black font-bold p-12
				absolute w-full top-[103px] flex flex-col gap-7
				text-lg md:hidden z-10
			`}>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<NavLink to='portfolio'>Portfolio</NavLink>
				</li>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<NavLink to='about'>About Us</NavLink>
				</li>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<NavLink to='contact'>Contact</NavLink>
				</li>
			</ul>
			<ul data-aos='fade-right' className='hidden md:flex gap-12'>
				<li className='text-gray font-bold text-[15px] cursor-pointer hover:text-black-custom transition-colors duration-500 ease-out'>
					<NavLink
						to='portfolio'
						className={({ isActive }) =>
							isActive ? 'text-black-custom' : undefined
						}>
						Portfolio
					</NavLink>
				</li>
				<li className='text-gray font-bold text-[15px] cursor-pointer hover:text-black-custom transition-colors duration-500 ease-out'>
					<NavLink
						to='about'
						className={({ isActive }) =>
							isActive ? 'text-black-custom' : undefined
						}>
						About Us
					</NavLink>
				</li>
				<li className='text-gray font-bold text-[15px] cursor-pointer hover:text-black-custom transition-colors duration-500 ease-out'>
					<NavLink
						to='contact'
						className={({ isActive }) =>
							isActive ? 'text-black-custom' : undefined
						}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
