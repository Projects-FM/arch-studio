import { Carousel, HangDown } from '../components';

export const Home = () => {
	return (
		<div>
			<HangDown pageName='Home' />
			<main>
				<Carousel />
			</main>
		</div>
	);
};
