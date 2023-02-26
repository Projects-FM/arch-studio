import { HangDown, PortfolioCard } from '../components';
import { projects } from '../utils/constants';

export const Portfolio = () => {
	return (
		<div>
			<HangDown pageName='Portfolio' />
			<main className='grid gap-8 lg:grid-cols-3 p-8 md:p-0'>
				{projects.map(project => (
					<PortfolioCard key={project.id} {...project} effect='fade-up' />
				))}
			</main>
		</div>
	);
};
