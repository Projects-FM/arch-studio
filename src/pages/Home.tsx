import { Carousel, HangDown } from '../components';

export const Home = () => {
	return (
		<div>
			<HangDown pageName='Home' />
			<main>
				<Carousel />
			</main>
			<section className='px-10 md:px-0 py-[7rem] md:py-16 relative lg:mt-[10rem]'>
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
							src='/src/assets/home/desktop/image-welcome.jpg'
							alt='Welcome Image'
						/>
					</aside>
				</div>
			</section>
		</div>
	);
};
