import { ContactForm, HangDown, MapView, PageInformation } from '../components';
import { ArrowIcon } from '../icons';
import heroDesktopImage from '../assets/contact/desktop/image-hero.jpg';
import heroTabletImage from '../assets/contact/tablet/image-hero.jpg';
import heroMobileImage from '../assets/contact/mobile/image-hero.jpg';

export const Contact = () => {
	return (
		<div>
			<HangDown pageName='Contact' />
			<PageInformation
				title='contact'
				subtitle='Tell us about your project'
				body='We’d love to hear more about your project. Please,
				leave a message below or give us a call. We have two
				offices, one in Texas and one in Tennessee. If you find
				yourself nearby, come say hello!'
				isCustomBlack={false}
				opacity={40}
				desktopImage={heroDesktopImage}
				tabletImage={heroTabletImage}
				mobileImage={heroMobileImage}
			/>
			<div className='hidden md:block w-16 h-px bg-light-gray mt-[12rem]'></div>
			<section className='px-4 py-10 md:px-0'>
				<div className='flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-[6rem] lg:mt-[5rem]'>
					<h2
						className='
						text-black-custom font-bold text-[40px] leading-[48px] tracking-[-1.2px] mt-[3rem] mb-4
						md:text-[56px] md:leading-[56px] md:mt-[3rem] lg:mt-0
					'>
						Contact
						<br />
						Details
					</h2>
					<div className='md:flex justify-between lg:flex-col lg:justify-center'>
						<div className='grid gap-6'>
							<h5 className='font-bold text-black-custom'>Main Office</h5>
							<p className='text-dark-gray text-[15px] font-medium'>
								Mail: archone@mail.com
							</p>
							<p className='text-dark-gray text-[15px] font-medium'>
								Address: 1892 Chenoweth Drive TN
							</p>
							<p className='text-dark-gray text-[15px] font-medium'>
								Phone: 123-456-3451
							</p>
						</div>
						<button className='flex gap-4 items-center my-6'>
							<p className='text-black-custom font-medium text-[15px]'>
								View on Map
							</p>
							<ArrowIcon color='#1B1D23' />
						</button>
					</div>

					<div className='md:flex justify-between mt-6 md:mt-20 lg:mt-0 lg:flex-col lg:justify-center'>
						<div className='grid gap-6'>
							<h5 className='font-bold text-black-custom'>Office II</h5>
							<p className='text-dark-gray text-[15px] font-medium'>
								Mail: archtwo@mail.com
							</p>
							<p className='text-dark-gray text-[15px] font-medium'>
								Address: 3399 Wines Lane Tx
							</p>
							<p className='text-dark-gray text-[15px] font-medium'>
								Phone: 832-123-3451
							</p>
						</div>
						<button className='flex gap-4 items-center my-6'>
							<p className='text-black-custom font-medium text-[15px]'>
								View on Map
							</p>
							<ArrowIcon color='#1B1D23' />
						</button>
					</div>
				</div>
			</section>

			<MapView />

			<ContactForm />
		</div>
	);
};
