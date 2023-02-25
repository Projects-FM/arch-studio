import { useState } from 'react';
import { Link } from 'react-router-dom';
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
			<button
				onClick={() => {
					if (!isMenuOpen) return;
					toggleMenu();
				}}>
				<Link to='/'>
					<LogoIcon color='#1B1D23' />
				</Link>
			</button>
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
					<Link to='portfolio'>Portfolio</Link>
				</li>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<Link to='about'>About Us</Link>
				</li>
				<li onClick={toggleMenu} className='cursor-pointer'>
					<Link to='contact'>Contact</Link>
				</li>
			</ul>
			<ul className='hidden md:flex gap-12'>
				<li className='text-gray font-bold text-[15px] cursor-pointer hover:text-black-custom transition-colors duration-500 ease-out'>
					<Link to='portfolio'>Portfolio</Link>
				</li>
				<li className='text-gray font-bold text-[15px] cursor-pointer hover:text-black-custom transition-colors duration-500 ease-out'>
					<Link to='about'>About Us</Link>
				</li>
				<li className='text-gray font-bold text-[15px] cursor-pointer hover:text-black-custom transition-colors duration-500 ease-out'>
					<Link to='contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};
