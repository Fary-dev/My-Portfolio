/** @format */

import styled from 'styled-components';
import ProjectWidget from './ProjectWidget';
import SymbolProjects from '../../Assets/projects.webp';

const projectsList = [
	{
		device: 'website',
		title: 'Restaurant Website',
		subtitle: 'Website',
		description:
			"I wrote this Project with Dart and Flutter. Here I've used GetX for state management.",
		image: 'project1',
		url: 'https://github.com/Fary-dev/Resturant_Web',
	},
	{
		device: 'mobile',
		title: 'Delivery Food',
		subtitle: 'UI & UX Mobile Application',
		description:
			'I also wrote this project with Dart and Flutter and again with GetX state management. here I used Sqflite for information that needs to be stored in local. In this project Dark and Light Themes work automatically.',
		image: 'project2',
		url: 'https://github.com/Fary-dev/Food_Delivery',
	},
	{
		device: 'website',
		title: 'Portfolio Website',
		subtitle: 'Website',
		description:
			'I wrote this project with TypeScript and React. In this website we only have one page and with section tags all parts are separated from each other and we have the possibility to send a direct Email.',
		image: 'project3',
		url: 'https://github.com/Fary-dev/Website-with-HTML-CSS',
	},
	{
		device: 'mobile',
		title: 'Cryptocurrency',
		subtitle: 'Mobile with Dart',
		description:
			'This is a simple example that I am getting data from the API.',
		image: 'project4',
		url: 'https://github.com/Fary-dev/cryptocurrency',
	},
];

const Projects = ({ translate }: any) => {
	return (
		<Body>
			<Container>
				<Space />
				<Symbol src={SymbolProjects} alt='education symbol' />
				<Title>{translate('projects')}</Title>
				{projectsList.map((item, idx) => (
					<Padding key={idx}>
						<ProjectWidget
							id={idx + 1}
							device={item.device}
							title={item.title}
							subtitle={item.subtitle}
							description={translate(item.description)}
							image={item.image}
							url={item.url}
							t={translate}
						/>
					</Padding>
				))}
			</Container>
		</Body>
	);
};

export default Projects;

const Body = styled.div`
	background-color: ${({ theme }) => theme.body.background};
	overflow: hidden;
	padding: 0 10px;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.body.containerLight};
	min-height: 100vh;
	width: 100%;
	justify-content: center;
	align-items: center;
	position: relative;
`;
const Space = styled.div`
	top: 0;
	display: block;
	height: 180px;
	width: 100%;
`;
const Symbol = styled.img`
	position: absolute;
	top: 85px;
	width: clamp(65px, 4.2vw, 100px);
	filter: invert(${({ theme }) => theme.invert});
	opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
	color: ${({ theme }) => theme.text.color};
	position: absolute;
	top: clamp(145px, 7vw, 170px);
	opacity: ${({ theme }) => theme.opacity};
`;
const Padding = styled.div`
	padding: 5vw;
`;
