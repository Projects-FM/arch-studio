import { FC } from 'react';

interface Props {
	title: string;
	subtitle: string;
	body: string;
	isCustomBlack?: boolean;
	opacity?: number;
}
export const PageInformation: FC<Props> = ({
	title,
	subtitle,
	body,
	isCustomBlack = true,
	opacity = 60,
}) => {
	return (
		<main className='relative'>
			<div
				className={`${
					isCustomBlack ? 'bg-black-custom' : 'bg-[black]'
				} lg:bg-[white]`}>
				<picture
					className={`opacity-${opacity} block h-60 md:h-full lg:opacity-100 lg:w-[60%]`}>
					<source
						media='(min-width: 992px)'
						srcSet={`src/assets/${title}/desktop/image-hero.jpg`}
					/>
					<source
						media='(min-width: 768px)'
						srcSet={`src/assets/${title}/tablet/image-hero.jpg`}
					/>
					<img
						className='object-cover h-full w-full'
						srcSet={`src/assets/${title}/mobile/image-hero.jpg`}
					/>
				</picture>
			</div>
			<div
				className='
					bg-[white] px-4 pb-10 pt-20 w-[90%] translate-y-[-35px]
					md:absolute right-0 bottom-0 md:px-16 md:pt-[10rem] md:translate-y-0 md:scale-105
					lg:w-[55%] lg:pl-[10rem] lg:pt-[10rem] lg:scale-100
					'>
				<h1
					className='
						hidden absolute md:block text-[120px] text-right leading-[200px] tracking-[-3px]
						top-[-20%] font-bold text-very-light-gray right-5 md:tracking-[-5px]
						lg:text-[200px] capitalize
						'>
					{title}
				</h1>
				<h2
					className='
						font-bold text-black-custom text-[40px] mb-8 leading-[48px] tracking-[-1.4px]
						md:text-[56px] md:leading-[56px] md:tracking-[-2px] lg:mb-12
						'>
					{subtitle}
				</h2>
				<p className='font-medium text-gray text-[15px]'>{body}</p>
			</div>
		</main>
	);
};
