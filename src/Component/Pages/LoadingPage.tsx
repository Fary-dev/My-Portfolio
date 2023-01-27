/** @format */

import React from 'react';
import styled from 'styled-components';

function LoadingPage() {
	return (
		<Body>
			<Container>
				<Loader />
			</Container>
		</Body>
	);
}

export default LoadingPage;

const Body = styled.div`
	display: block;
	height: vh100;
	background-color: ${({ theme }) => theme.body.background};
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

const Loader = styled.div`
	position: absolute;
	top: 100px;
	width: 50px;
	height: 50px;
	margin: 0;
	background: transparent;
	border-top: 3px solid ${({ theme }) => theme.text.span};
	border-right: 3px solid transparent;
	border-radius: 50%;
	-webkit-animation: 1s spin linear infinite;
	animation: 800ms spin linear infinite;
	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
