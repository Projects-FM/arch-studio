import { HangDown, LeaderCard, PageInformation } from '../components';
import heritageImage from '../assets/about/desktop/image-heritage.jpg';
import heroDesktopImage from '../assets/about/desktop/image-hero.jpg';
import heroTabletImage from '../assets/about/tablet/image-hero.jpg';
import heroMobileImage from '../assets/about/mobile/image-hero.jpg';

export const About = () => {
	return (
		<div>
			<HangDown pageName='About Us' />
			<PageInformation
				title='about'
				subtitle='Your team of professionals'
				body='Our small team of world-class professionals will work with you every
					step of the way. Strong relationships are at the core of everything we
					do. This extends to the relationship our projects have with their
					surroundings.'
				desktopImage={heroDesktopImage}
				tabletImage={heroTabletImage}
				mobileImage={heroMobileImage}
			/>

			<div className='hidden md:block w-16 h-px bg-light-gray mt-[12rem]'></div>
			<section
				className='
					px-4 py-10 md:px-0 grid lg:grid-cols-[40%_55%] gap-5
					lg:py-0
				'>
				<div data-aos='fade-right'>
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
				<div data-aos='fade-left' className='justify-end hidden lg:flex'>
					<img className='w-[90%]' src={heritageImage} alt='Heritage' />
				</div>
			</section>

			<section className='px-4 py-10 md:px-0 lg:grid grid-cols-[33%_66%] md:my-[8rem]'>
				<h2
					data-aos='fade-left'
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
