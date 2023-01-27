/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import ContactItem from './ContactItem';

const contactList = [
	{
		icon: 'location',
		title: 'i live in',
		details: 'austria, wien',
		url: 'https://goo.gl/maps/DMgoFtsmsQTZFsHL6',
	},
	{
		icon: 'tel',
		title: 'call',
		details: '+43 67762733583',
		url: 'tel:067762733583',
	},
	{
		icon: 'whatsapp',
		title: 'whatsapp',
		details: 'send massage',
		url: 'https://wa.me/4367762733583?text=Hello',
	},
	{
		icon: 'email',
		title: 'email',
		details: 'Fbakhsheshi@ymail.com',
		url: 'mailto:fbakhsheshi@ymail.com',
	},
];

const Contact = ({ translate }: any) => {
	const [emailText, setEmailText] = useState('');

	function checkEmail() {
		var email = document.getElementById('Email') as HTMLInputElement;
		var filter =
			// eslint-disable-next-line no-useless-escape
			/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (!filter.test(String(email.innerHTML))) {
			alert('Please provide a valid email address');
			return false;
		}
		setEmailText(email.innerHTML);
		email.innerHTML = emailText;
	}

	return (
		<Body>
			<Container>
				<Space />
				<Symbol
					src={require('../../Assets/contact.webp')}
					alt='contact symbol'></Symbol>
				<Title>{translate('contact')}</Title>
				<GridBuilder>
					{contactList.map((e, idx) => (
						<Animation
							style={{ '--count': idx } as React.CSSProperties}
							key={idx}>
							<ContactItem
								url={e.url}
								icon={e.icon}
								title={translate(e.title)}
								details={translate(e.details)}
							/>
						</Animation>
					))}
				</GridBuilder>
				<Row
					style={
						{
							'--delay': `${contactList.length + 1}`,
						} as React.CSSProperties
					}>
					<Column>
						<Form
							action='https://formsubmit.co/fbakhsheshi@ymail.com'
							method='POST'>
							<h2>{translate('contact info')}</h2>
							<RowForm>
								<TextField
									name='fName'
									type='text'
									placeholder={translate('first name')}
									required></TextField>
								<TextField
									name='lName'
									type='text'
									placeholder={translate('last name')}
									required></TextField>
							</RowForm>
							<TextField
								name='email'
								type='email'
								id='Email'
								placeholder={translate('email')}
								onChange={(e) => {
									setEmailText(e.target.value.trim());
								}}
								required></TextField>
							<Textarea
								name='massage'
								id='exampleFormControlTextarea1'
								placeholder={translate('massage')}
								required
								rows={5}></Textarea>
							<Button value='Validate' type='submit' onClick={checkEmail}>
								{translate('send')}
							</Button>
						</Form>
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
					</Column>
					<Iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42482.524724816816!2d16.38235912385544!3d48.280580053497275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d062cc1efac73%3A0x90e47d0364caad4c!2sFloridsdorf%2C%201210%20Wien!5e0!3m2!1sde!2sat!4v1656256904247!5m2!1sde!2sat'
						style={{ border: '0' }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title={'my location'}></Iframe>
				</Row>
			</Container>
		</Body>
	);
};

export default Contact;

const Body = styled.div`
	background-color: ${({ theme }) => theme.body.background};
	overflow: hidden;
	padding: 0 10px;
	box-sizing: border-box;
	@-webkit-keyframes autofill {
		0%,
		100% {
			color: #666;
			background: transparent;
		}
	}

	input:-webkit-autofill {
		-webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
		-webkit-animation-name: autofill;
		-webkit-animation-fill-mode: both;
	}
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
	height: 185px;
	width: 100%;
`;
const Symbol = styled.img`
	position: absolute;
	top: 95px;
	width: clamp(43px, 4.2vw, 45px);
	filter: invert(${({ theme }) => theme.invert});
	opacity: ${({ theme }) => theme.opacity};
`;
const Title = styled.h5`
	color: ${({ theme }) => theme.text.color};
	position: absolute;
	top: clamp(145px, 7vw, 170px);
	opacity: ${({ theme }) => theme.opacity};
`;
const GridBuilder = styled.div`
	position: relative;
	display: grid;
	width: 100%;
	padding: 0 25px;
	max-width: 1400px;
	gap: 20px;
	grid-template-rows: repeat(auto-fill, 1fr);
	grid-template-columns: repeat(auto-fill, 1fr);
	@media (min-width: 750px) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1170px) {
		grid-template-rows: repeat(1, 1fr);
		grid-template-columns: repeat(4, 1fr);
	}
	@media (min-width: 1455px) {
		padding: 0;
	}
`;
const Animation = styled.div`
	width: 100%;
	opacity: 0;
	animation: animated-contact-item 1s ease forwards;
	animation-delay: calc(var(--count) * 200ms + 400ms);
	@keyframes animated-contact-item {
		from {
			transform: translateY(200px);
			opacity: 0;
		}
		to {
			transform: translateY(0px);
			opacity: 1;
		}
	}
`;
const Row = styled.div`
	position: relative;
	overflow: hidden;
	width: calc(100% - 53px);
	// justify-content: center;
	// align-items: center;
	max-width: 1400px;
	margin: 30px 0;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	height: 1000px;
	opacity: 0;
	animation: animated-contact-container 1s ease forwards;
	animation-delay: calc(var(--delay) * 200ms + 400ms);

	@keyframes animated-contact-container {
		from {
			transform: translateY(200px);
			opacity: 0;
		}
		to {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	@media (min-width: 750px) {
		flex-direction: row;
		height: 100%;
	}
`;
const Column = styled.div`
	flex: 50%;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.body.container};
	padding: 20px;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	h2 {
		text-align: center;
		color: ${({ theme }) => theme.text.color};
	}
`;
const RowForm = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;
const TextField = styled.input`
	width: 100%;
	padding: 8px;
	margin: 10px 0;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.textField.background};
	border: 1px solid ${({ theme }) => theme.textField.borderColor};
	color: ${({ theme }) => theme.text.color};
	&:focus {
		outline: none;
		background-color: ${({ theme }) => theme.textField.background};
		border-color: rgb(199, 172, 51);
		box-shadow: 0 1 10px ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.text.color};
	}
	&::placeholder {
		color: rgba(105, 105, 105, 0.5);
		font-size: 0.8rem;
		padding-left: 10px;
	}
`;
const Textarea = styled.textarea`
	padding: 8px;
	margin: 10px 0;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.textField.background};
	border: 1px solid ${({ theme }) => theme.textField.borderColor};
	color: ${({ theme }) => theme.text.color};

	&:focus {
		outline: none;
		background-color: ${({ theme }) => theme.body.containerLight};
		border-color: rgb(255, 209, 4);
		box-shadow: 0 1 10px ${({ theme }) => theme.primaryColor};
		color: ${({ theme }) => theme.text.color};
	}
	&::placeholder {
		color: rgba(105, 105, 105, 0.5);
		font-size: 0.8rem;
		padding-left: 10px;
	}
`;
const Iframe = styled.iframe`
	flex: 50%;
	display: block;
	width: 100%;
`;
const Button = styled.button`
	width: 40%;
	margin: 20px 0;
	padding: 5px 0;
	color: ${({ theme }) => theme.button.color};
	background-color: ${({ theme }) => theme.body.container};
	border: 2px solid ${({ theme }) => theme.button.borderColor};
	opacity: 1;
	border-radius: 5px;
	transition: 0.3s;

	&:hover {
		color: #000;
		background-color: ${({ theme }) => theme.primaryColor};
		border: 2px solid ${({ theme }) => theme.primaryColor};
	}
`;
const RowIcons = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	gap: 20px;

	i {
		color: ${({ theme }) => theme.text.color};
		font-size: 25px;
		transition: color 300ms;
		padding: 0;
		margin: 0;
		&:hover {
			color: ${({ theme }) => theme.primaryColor};
		}
	}
`;
