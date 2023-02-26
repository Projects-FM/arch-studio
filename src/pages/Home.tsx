import { Link } from 'react-router-dom';
import { Carousel, HangDown, PortfolioCard } from '../components';
import { ArrowIcon } from '../icons';
import welcomeImage from '../assets/home/desktop/image-welcome.jpg';
import smallTeamDesktopImage from '../assets/home/desktop/image-small-team.jpg';
import smallTeamTabletImage from '../assets/home/tablet/image-small-team.jpg';
import smallTeamMobileImage from '../assets/home/mobile/image-small-team.jpg';
import delSolDesktopImage from '../assets/portfolio/desktop/image-del-sol.jpg';
import delSolTabletImage from '../assets/portfolio/tablet/image-del-sol.jpg';
import delSolMobileImage from '../assets/portfolio/mobile/image-del-sol.jpg';
import b228DesktopImage from '../assets/portfolio/desktop/image-228b.jpg';
import b228TabletImage from '../assets/portfolio/tablet/image-228b.jpg';
import b228MobileImage from '../assets/portfolio/mobile/image-228b.jpg';
import prototypeDesktopImage from '../assets/portfolio/desktop/image-prototype.jpg';
import prototypeTabletImage from '../assets/portfolio/tablet/image-prototype.jpg';
import prototypeMobileImage from '../assets/portfolio/mobile/image-prototype.jpg';

export const Home = () => {
	return (
		<div>
			<HangDown pageName='Home' />
			<main data-aos='fade-right'>
				<Carousel />
			</main>
			<section
				data-aos='fade-up'
				className='px-10 md:px-0 py-[7rem] md:py-16 relative lg:mt-[10rem]'>
				<h2
					className='
						hidden font-bold text-[120px] leading-[200px] tracking-[-3px] text-[#f0f0f5] text-center
						md:block lg:absolute lg:top-[-4%] left-0 lg:text-[200px]
						'>
					Welcome
				</h2>
				<div className='lg:grid lg:grid-cols-[70%_30%] gap-16 place-content-end'>
					<article className='flex justify-end items-center lg:mr-[5rem]'>
						<div className='lg:w-[65%]'>
							<h3
								className='
								mb-8 text-[40px] text-black-custom font-bold leading-[48px] tracking-[-1.4px]
								md:text-[56px] md:w-[70%] md:leading-[56px]
								lg:w-full lg:text-dark-gray lg:mt-[5rem]
							'>
								Welcome to Arch Studio
							</h3>
							<p className='my-5 text-black-custom text-[15px] font-medium leading-[25px]'>
								We have a unique network and skillset to help bring your
								projects to life. Our small team of highly skilled individuals
								combined with our large network put us in a strong position to
								deliver exceptional results.
							</p>
							<p className='my-5 text-black-custom text-[15px] font-medium leading-[25px]'>
								Over the past 10 years, we have worked on all kinds of projects.
								From stations to high-rise buildings, we create spaces that
								inspire and delight.
							</p>
							<p className='my-5 text-black-custom text-[15px] font-medium leading-[25px]'>
								We work closely with our clients so that we understand the
								intricacies of each project. This allows us to work in harmony
								the surrounding area to create truly stunning projects that will
								stand the test of time.
							</p>
						</div>
					</article>
					<aside className='hidden lg:block'>
						<img
							className='w-full h-full object-cover'
							src={welcomeImage}
							alt='Welcome Image'
						/>
					</aside>
				</div>
			</section>

			<section data-aos='fade-down' className='my-16 bg-black-custom relative'>
				<picture className='opacity-40'>
					<source media='(min-width: 992px)' srcSet={smallTeamDesktopImage} />
					<source media='(min-width: 768px)' srcSet={smallTeamTabletImage} />
					<img
						className='object-cover h-full w-full'
						srcSet={smallTeamMobileImage}
					/>
				</picture>
				<div className='absolute top-0 px-8 md:px-10 py-[12rem] lg:p-[12rem]'>
					<h3
						className='
						text-[white] text-[40px] leading-[48px] tracking-[-2px] font-bold w-[80%]
						md:text-[56px] md:leading-[56px] md:w-[70%]
						'>
						Small team, big ideas
					</h3>
					<Link to='about'>
						<button
							className='
							bg-black-custom text-[white] flex gap-4 items-center mt-10 p-7 font-medium
							hover:bg-gray transition duration-1000
							'>
							About Us
							<ArrowIcon color='#FFF' />
						</button>
					</Link>
				</div>
			</section>

			<section className='px-12 md:p-0'>
				<nav className='flex justify-between items-center mt-5 mb-10 md:mb-[5rem] md:mt-[10rem]'>
					<h3
						data-aos='fade-left'
						className='font-bold text-black-custom text-[40px] tracking-[-1.4px]
						md:text-[56px] md:tracking-[-2px]
					'>
						Featured
					</h3>
					<Link to='portfolio'>
						<button
							data-aos='fade-right'
							className='
							bg-black-custom text-[white] hidden md:flex gap-4 items-center py-6 font-medium
							hover:bg-gray transition duration-1000 justify-center text-[15px] px-10
							'>
							See All
							<ArrowIcon color='#FFF' />
						</button>
					</Link>
				</nav>
				<div className='grid lg:grid-cols-3 gap-8'>
					<PortfolioCard
						effect={'flip-right'}
						projectName='Project del Sol'
						projectNumber={1}
						desktopImage={delSolDesktopImage}
						tabletImage={delSolTabletImage}
						mobileImage={delSolMobileImage}
					/>
					<PortfolioCard
						effect={'flip-right'}
						projectName='228B Tower'
						projectNumber={2}
						desktopImage={b228DesktopImage}
						tabletImage={b228TabletImage}
						mobileImage={b228MobileImage}
					/>
					<PortfolioCard
						effect={'flip-right'}
						projectName='Le Prototype'
						projectNumber={3}
						desktopImage={prototypeDesktopImage}
						tabletImage={prototypeTabletImage}
						mobileImage={prototypeMobileImage}
					/>
				</div>
				<Link to='portfolio'>
					<button
						data-aos='fade-up'
						className='
							bg-black-custom text-[white] md:hidden flex gap-4 items-center mt-10 p-7 font-bold
							hover:bg-gray transition duration-1000 w-full justify-center text-[15px]
							'>
						See All
						<ArrowIcon color='#FFF' />
					</button>
				</Link>
			</section>
		</div>
	);
};
