import { HangDown, LeaderCard } from '../components';

export const AboutUs = () => {
	return (
		<div>
			<HangDown pageName='About Us' />
			<main className='relative'>
				<div className='bg-black-custom lg:bg-[white]'>
					<picture className='opacity-60 block h-60 md:h-full lg:opacity-100 lg:w-[60%]'>
						<source
							media='(min-width: 992px)'
							srcSet={`src/assets/about/desktop/image-hero.jpg`}
						/>
						<source
							media='(min-width: 768px)'
							srcSet={`src/assets/about/tablet/image-hero.jpg`}
						/>
						<img
							className='object-cover h-full w-full'
							srcSet={`src/assets/about/mobile/image-hero.jpg`}
						/>
					</picture>
				</div>
				<div
					className='
					bg-[white] px-4 pb-10 pt-20 w-[90%] translate-y-[-35px]
					md:absolute right-0 bottom-0 md:px-16 md:pt-[10rem] md:translate-y-0 md:scale-105
					lg:w-[55%] lg:pl-[10rem] lg:pt-[10rem]
					'>
					<h1
						className='
						hidden absolute md:block text-[120px] text-right leading-[200px] tracking-[-3px]
						top-[-20%] font-bold text-very-light-gray right-5
						lg:text-[200px] lg:
						'>
						About
					</h1>
					<h2
						className='
						font-bold text-black-custom text-[40px] mb-8 leading-[48px] tracking-[-1.4px]
						md:text-[56px] md:leading-[56px] md:tracking-[-2px] lg:mb-12
						'>
						Your team of professionals
					</h2>
					<p className='font-medium text-gray text-[15px]'>
						Our small team of world-class professionals will work with you every
						step of the way. Strong relationships are at the core of everything
						we do. This extends to the relationship our projects have with their
						surroundings.
					</p>
				</div>
			</main>

			<div className='hidden md:block w-16 h-px bg-light-gray mt-[12rem]'></div>
			<section
				className='
					px-4 py-10 md:px-0 grid lg:grid-cols-[40%_55%] gap-5
					lg:py-0
				'>
				<div>
					<h2
						className='
						text-black-custom font-bold text-[40px] leading-[48px] tracking-[-1.2px] my-[3rem]
						md:text-[56px] md:leading-[56px] md:mt-[3rem]
					'>
						Our
						<br />
						Heritage
					</h2>
					<p className='text-[15px] text-black-custom my-5 font-medium leading-6'>
						Founded in 2007, we started as a trio of architects. Our
						complimentary skills and relentless attention to detail turned Arch
						into one of the most sought after boutique firms in the country.
					</p>
					<p className='text-[15px] text-black-custom my-5 font-medium leading-6'>
						Speciliazing in Urban Design allowed us to focus on creating
						exceptional structures that live in harmony with their surroundings.
						We consider every detail from every surrounding element to inform
						our designs.
					</p>
					<p className='text-[15px] text-black-custom my-5 font-medium leading-6'>
						Our small team of world-class professionals provides input on every
						project.
					</p>
				</div>
				<div className='justify-end hidden lg:flex'>
					<img
						className='w-[90%]'
						src='/src/assets/about/desktop/image-heritage.jpg'
						alt='Heritage'
					/>
				</div>
			</section>

			<section className='px-4 py-10 md:px-0 lg:grid grid-cols-[33%_66%] md:my-[8rem]'>
				<h2
					className='
						text-black-custom font-bold text-[40px] leading-[48px] tracking-[-1.2px] mb-[3rem]
						md:text-[56px] md:leading-[56px]
					'>
					The
					<br />
					Leaders
				</h2>
				<div className='grid gap-10 md:grid-cols-2'>
					<LeaderCard
						leaderName='Jake Richards'
						leaderJob='Chief Architect'
						image='jake'
					/>
					<LeaderCard
						leaderName='Thompson Smith'
						leaderJob='Head of Finance'
						image='thompson'
					/>
					<LeaderCard
						leaderName='Jackson Rourke'
						leaderJob='Lead Designer'
						image='jackson'
					/>
					<LeaderCard
						leaderName='Maria Simpson'
						leaderJob='Senior Architect'
						image='maria'
					/>
				</div>
			</section>
		</div>
	);
};
