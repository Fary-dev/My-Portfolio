/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DropDown from './DropDown';
import BurgerIcon from './BurgerIcon';
import Logo from '../../Assets/logo.webp';
import Dark from '../../Assets/dark.webp';
import Light from '../../Assets/light.webp';
import EN from '../../Assets/en.webp';
import DE from '../../Assets/de.webp';

interface NavbarDate {
	thm: any;
	toggleTheme: any;
	translate: any;
	HandleChangeLng: any;
	lng: string;
}
interface PropsStyle {
	open?: boolean;
}

export const NavList = [
	{
		id: 1,
		title: 'about me',
		path: '/about',
		className: 'navItem',
	},
	{
		id: 2,
		title: 'projects',
		path: '/projects',
		className: 'navItem',
	},
	{
		id: 3,
		title: 'education',
		path: '/education',
		className: 'navItem',
	},
	{
		id: 4,
		title: 'experience',
		path: '/experience',
		className: 'navItem',
	},
	{
		id: 5,
		title: 'skills',
		path: '/skills',
		className: 'navItem',
	},
	{
		id: 6,
		title: 'contact',
		path: '/contact',
		className: 'navItem',
	},
];

function NavBar({
	thm,
	toggleTheme,
	translate,
	HandleChangeLng,
	lng,
}: NavbarDate) {
	const [state, setState] = useState({
		dropDown: false,
		isOpen: false,
	});

	return (
		<>
			<AppBar
				onMouseLeave={() => {
					setState({
						...state,
						dropDown: state.dropDown && false,
						isOpen: state.isOpen && false,
					});
				}}>
				<Nav>
					<Link
						to='/'
						style={LinkStyled}
						onClick={() => {
							setState({
								...state,
								dropDown: false,
							});
						}}>
						<Row>
							<img src={Logo} alt='Logo Faramarz Bakhsheshi'></img>
							<h5>Faramarz Bakhsheshi</h5>
						</Row>
					</Link>

					<BurgerIcon open={state.isOpen} setOpen={setState.prototype} />

					<Menu open={state.isOpen}>
						{NavList.map((item) => (
							<MenuItem
								className={item.className}
								key={item.id}
								onClick={() => {
									setState({
										...state,
										dropDown: state.dropDown && false,
										isOpen: state.isOpen && false,
									});
								}}>
								<Link to={item.path}>{translate(item.title)}</Link>
							</MenuItem>
						))}
						<MenuItem
							onClick={() => {
								setState({
									...state,
									dropDown: state.dropDown ? false : true,
								});
							}}>
							<Center>
								<Image alt={lng} src={lng === 'en' ? EN : DE} />
								<Div
									onClick={() => {
										setState({
											...state,
											dropDown: false,
										});
									}}>
									<DropDown
										position={window.innerWidth > 992 ? true : false}
										active={state.dropDown}
										t={translate}
										HandleChangeLng={HandleChangeLng}
									/>
								</Div>
							</Center>
						</MenuItem>
						<MenuItem
							onClick={() => {
								setState({
									...state,
									dropDown: state.dropDown && false,
									isOpen: state.isOpen && false,
								});
								toggleTheme();
							}}>
							<Center>
								<ThemeIcon alt={thm} src={thm === 'dark' ? Light : Dark} />
							</Center>
						</MenuItem>
					</Menu>
				</Nav>
			</AppBar>
		</>
	);
}
export default NavBar;

const AppBar = styled.div`
	position: fixed;
	width: 100%;
	z-index: 5;
	@media (min-width: 992px) {
		height: 75px;
	}
`;
const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	padding: 8px 16px;
	border: 10px solid ${({ theme }) => theme.body.background};
	background: ${({ theme }) => theme.body.containerLight};
	border-radius: 0 0 20px 20px;
	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
const LinkStyled = {
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
};
const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	h5 {
		color: ${({ theme }) => theme.text.color};
		display: none;
		padding-left: 10px;
		margin: 0;
		@media (min-width: 577px) {
			display: block;
		}
	}
	img {
		width: 40px;
		height: 40px;
	}
	@media (min-width: 992px) {
		height: 75px;
	}
`;
const Menu = styled.ul<PropsStyle>`
	width: 100%;
	list-style-type: none;
	display: ${({ open }) => (open ? 'flex' : 'none')};
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	margin: 0;
	@media (min-width: 992px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: auto;
		gap: 10px;
	}
`;
const MenuItem = styled.li`
	width: 100%;
	font-weight: 400;
	transition: 0.2s;
	border-radius: 16px;
	cursor: pointer;
	a {
		color: ${({ theme }) => theme.text.color};
		text-decoration: none;
		opacity: 0.6;
		transition: 0.2s;
		display: block;
		padding: 0.6rem;
		@media (min-width: 992px) {
			padding: 0.6rem 0;
		}
		&:hover {
			opacity: 1;
		}
	}
	&:hover {
		background-color: ${({ theme }) => theme.body.background};
		@media (min-width: 992px) {
			background-color: transparent;
		}
	}
	@media (min-width: 992px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
	}
`;
const Image = styled.img`
	height: 25px;
	width: 25px;
	margin: 10px 20px;
	@media (min-width: 992px) {
		margin: 5px;
	}
`;
const Div = styled.div``;
const Center = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
const ThemeIcon = styled.img`
	height: 25px;
	width: 25px;
	margin: 10px 20px;
	@media (min-width: 992px) {
		margin: 5px;
	}
`;
