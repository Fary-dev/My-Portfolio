/** @format */

import styled from 'styled-components';
import MyPhoto from '../../Assets/developer.webp';

const CV = require('../../Assets/CV.pdf');

const About = ({ translate }: any) => {
	return (
		<Body>
			<Container>
				<Space />
				<Text>
					{translate("Hello, I'm")}
					<span>Faramarz</span>
				</Text>
				<TextPrimary>{translate('Front End Developer')}</TextPrimary>
				<img src={MyPhoto} alt='Faramarz Bakhsheshi'></img>
				<p>
					{translate(
						"My name is Faramarz Bakhsheshi I'm a Front End Developer, I have a Bachelor of Software Engineering. I describe myself as a passionate developer who loves coding, open source, the web and mobile platform.Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. In my free time you can find me at the gym."
					)}
				</p>
				<Btn role='button' href={CV} download='Faramarz-Bakhsheshi-CV'>
					{translate('download resume')}
				</Btn>
				<Copyright>
					<p>Copyright © 2022 Faramarz Bakhsheshi</p>
				</Copyright>
				<RowIcons>
					<a
						href='https://www.linkedin.com/in/faramarz-b-82108a85'
						target='_blank'
						rel='noreferrer'>
						<i className='bi bi-linkedin'></i>
					</a>
					<a
						href='https://github.com/Fary-dev'
						target='_blank'
						rel='noreferrer'>
						<i className='bi bi-github'></i>
					</a>
					<a
						about='Facebook'
						href='https://www.facebook.com/faramarz.bakhsheshi'
						target='_blank'
						rel='noreferrer'>
						<i className='bi bi-facebook'></i>
					</a>
				</RowIcons>
			</Container>
		</Body>
	);
};

export default About;

const Body = styled.div`
	background-color: ${({ theme }) => theme.body.background};
	overflow: hidden;
	box-sizing: border-box;
	padding: 0 10px;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.body.containerLight};
	min-height: 100vh;
	min-width: 100%;
	justify-content: center;
	align-items: center;

	img {
		object-fit: contain;
		padding-top: 30px;
		display: block;
		width: 30vw;
		height: 30vw;
		max-width: 400px;
		max-height: 400px;
		animation: hello 1s ease forwards;
		animation-delay: 1000ms;
		opacity: 0;
		@media (max-width: 750px) {
			display: none;
		}
	}
	p {
		letter-spacing: 0.2px;
		font-weight: 500;
		text-align: justify;
		max-width: 1400px;
		color: ${({ theme }) => theme.text.p};
		font-size: clamp(16px, 2.5vw, 20px);
		padding: 5vh 13vw;
		animation: hello 1s ease forwards;
		animation-delay: 1200ms;
		opacity: 0;
		@media (min-width: 750px) {
			width: 90%;
			padding: 5vh 5vw;
		}
		@media (min-width: 970px) {
			width: 85%;
		}
		@media (min-width: 1170px) {
			width: 80%;
		}
	}
`;
const Space = styled.div`
	display: inline-block;
	height: 80px;
`;
const Text = styled.h1`
	display: flex;
	color: ${({ theme }) => theme.text.color};
	font-size: clamp(10px, 5.5vw, 36px);
	flex-direction: Row;
	justify-content: center;
	align-items: center;
	animation: hello 1s ease forwards;
	animation-delay: 300ms;
	opacity: 0;
	span {
		color: ${({ theme }) => theme.text.p};
		font-size: clamp(10px, 5.5vw, 36px);
		padding-left: 10px;
		animation: hello 1s ease forwards;
		animation-delay: 500ms;
		opacity: 0;
		text-shadow: 1px -1px 3px ${({ theme }) => theme.shadow};
	}
`;
const TextPrimary = styled(Text)`
	background-color: ${({ theme }) => theme.primaryColor};
	color: ${({ theme }) => theme.button.textColor};
	font-size: clamp(10px, 5.5vw, 26px);
	padding: 10px;
	border-radius: 10px;
	animation: hello 1s ease forwards;
	animation-delay: 800ms;
	opacity: 0;
`;
const Copyright = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #000;
	p {
		width: 100vw;
		padding: 10px;
		margin: 0 auto;
		text-align: center;
		color: #ccc;
		font-size: clamp(10px, 4vw, 16px);
	}
`;
const Btn = styled.a`
	text-decoration: none;
	padding: 5px 20px;
	margin-bottom: 45px;
	color: ${({ theme }) => theme.button.color};
	background-color: ${({ theme }) => theme.body.containerLight};
	border: 2px solid ${({ theme }) => theme.button.borderColor};
	animation: hello 1s ease forwards;
	animation-delay: 1500ms;
	opacity: 0;
	border-radius: 5px;
	transition: 0.3s;
	@keyframes hello {
		from {
			transform: translateY(200px);
			opacity: 0;
		}
		to {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	&:hover {
		color: #000;
		background-color: ${({ theme }) => theme.primaryColor};
		border: 2px solid ${({ theme }) => theme.primaryColor};
	}
`;
const RowIcons = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: end;
	gap: 10px;
	bottom: 10%;
	left: 20px;
	i {
		color: ${({ theme }) => theme.primaryColor};
		font-size: 25px;
		transition: color 300ms;
		padding: 0;
		margin: 0;
		&:hover {
			color: ${({ theme }) => theme.text.color};
		}
	}
`;
