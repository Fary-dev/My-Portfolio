/** @format */

import styled from 'styled-components';

interface contactWidgetItem {
	icon: string;
	title: string;
	details: string;
	url: string;
}

function ContactItem({ url, icon, title, details }: contactWidgetItem) {
	return (
		<Body>
			<a href={url} target='_blank '>
				<Container>
					<img
						src={require(`../../Assets/${icon}.webp`)}
						alt='my location'></img>
					<h5>{title}</h5>
					<p>{details}</p>
				</Container>
			</a>
		</Body>
	);
}

export default ContactItem;

const Body = styled.div`
	a {
		text-decoration: none;
	}
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.body.container};
	padding: 15px 0;
	border-radius: 20px;
	-webkit-box-shadow: 0 10px 6px -6px #777;
	-moz-box-shadow: 0 10px 6px -6px #777;
	box-shadow: 0 10px 6px -6px #777;
	&:hover {
		-webkit-box-shadow: 0 15px 10px #777;
		-moz-box-shadow: 0 15px 10px #777;
		box-shadow: 0 15px 10px #777;
		-webkit-transform: translateY(-5px);
		-moz-transform: translateY(-5px);
		-o-transform: translateY(-5px);
		-ms-transform: translateY(-5px);
		transform: translateY(-5px);
		opacity: 1;
		animation: shake 300ms ease forwards;
		@keyframes shake {
			0% {
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			33% {
				-webkit-transform: rotate(2deg);
				-moz-transform: rotate(2deg);
				-o-transform: rotate(2deg);
				-ms-transform: rotate(2deg);
				transform: rotate(2deg);
			}
			66% {
				-webkit-transform: rotate(-2deg);
				-moz-transform: rotate(-2deg);
				-o-transform: rotate(-2deg);
				-ms-transform: rotate(-2deg);
				transform: rotate(-2deg);
			}
			100% {
				-webkit-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-o-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				transform: rotate(0deg);
				animation-play-state: paused;
			}
		}
	}
	h5 {
		font-size: clamp(15px, 7vw, 24px);

		color: ${({ theme }) => theme.text.color};
		padding-top: 30px;
	}
	img {
		width: clamp(10px, 9.5vw, 45px);
		height: clamp(10px, 9.5vw, 45px);
		opacity: 0.5;
		// object-position: 50% 50%;
	}
	p {
		font-size: clamp(10px, 7vw, 20px);
		color: ${({ theme }) => theme.text.p};
	}
`;
