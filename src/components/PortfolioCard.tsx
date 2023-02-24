import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
	projectName: string;
	image: string;
	projectNumber?: number;
	projectDate?: string;
}

export const PortfolioCard: FC<Props> = ({
	projectName,
	projectNumber,
	projectDate,
	image,
}) => {
	const navigate = useNavigate();
	const [desktopImage, setDesktopImage] = useState();
	const [tabletImage, setTabletImage] = useState();
	const [mobileImage, setMobileImage] = useState();

	useEffect(() => {
		import(`../assets/portfolio/desktop/image-${image}.jpg`).then(img => {
			setDesktopImage(img.default);
		});
	}, [desktopImage]);

	useEffect(() => {
		import(`../assets/portfolio/tablet/image-${image}.jpg`).then(img => {
			setTabletImage(img.default);
		});
	}, [tabletImage]);

	useEffect(() => {
		import(`../assets/portfolio/mobile/image-${image}.jpg`).then(img => {
			setMobileImage(img.default);
		});
	}, [mobileImage]);

	const handleClick = () => {
		navigate('/portfolio');
	};

	return (
		<div onClick={handleClick}>
			<div
				className='
					bg-black-custom relative cursor-pointer
					hover:bg-[gray] transition duration-200 ease-in
					'>
				<picture className='opacity-50'>
					<source media='(min-width: 992px)' srcSet={desktopImage} />
					<source media='(min-width: 768px)' srcSet={tabletImage} />
					<img className='object-cover h-full w-full' srcSet={mobileImage} />
				</picture>
				<div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
					<h4 className='font-bold capitalize mb-2 text-[white] text-lg'>
						{projectName}
					</h4>
					{projectDate ? (
						<p className='text-[white]'>{projectDate}</p>
					) : (
						<Link to='portfolio'>
							<button className='opacity-75 font-medium text-[white] text-[15px]'>
								View All Projects
							</button>
						</Link>
					)}
				</div>
				{projectNumber && (
					<div className='hidden md:block absolute right-5 top-0 opacity-75 text-[white] text-[200px] font-bold'>
						{projectNumber}
					</div>
				)}
			</div>
		</div>
	);
};
