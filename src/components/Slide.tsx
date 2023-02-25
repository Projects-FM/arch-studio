import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../icons';

interface Props {
	title: string;
	body: string;
	desktopImage: string;
	tabletImage: string;
	mobileImage: string;
}

export const Slide: FC<Props> = ({
	title,
	body,
	desktopImage,
	tabletImage,
	mobileImage,
}) => {
	return (
		<div className='h-[34rem] md:h-[45rem] bg-black-custom'>
			<picture className='opacity-40'>
				<source media='(min-width: 992px)' srcSet={desktopImage} />
				<source media='(min-width: 768px)' srcSet={tabletImage} />
				<img className='object-cover h-full w-full' srcSet={mobileImage} />
			</picture>
			<div className='lg:w-[80%] lg:pl-[190px] p-10 md:p-20 h-full flex flex-col justify-center absolute top-0 z-10'>
				<h2
					className='
					text-[white] text-[48px] font-bold leading-[48px] tracking-[-1.2px] 
						md:leading-[80px] md:text-[80px] md:tracking-[-2px]'>
					{title}
				</h2>
				<p className='my-5 text-[white] font-medium'>{body}</p>
				<Link to='portfolio'>
					<button
						className='
						bg-black-custom text-[white] flex gap-2 items-center mt-10 px-10 py-5 font-medium
						hover:bg-gray transition duration-1000
						'>
						See Our Portfolio
						<ArrowIcon color='#FFF' />
					</button>
				</Link>
			</div>
		</div>
	);
};
