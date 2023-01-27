/** @format */

import React, { useState, lazy, Suspense } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Component/Constants/Themes';
import LoadingPage from './Component/Pages/LoadingPage';

const HomePage = lazy(() => import('./Component/About/About'));
const AboutPage = lazy(() => import('./Component/About/About'));
const ProjectsPage = lazy(() => import('./Component/Projects/Projects'));
const EducationPage = lazy(() => import('./Component/Education/Education'));
const ExperiencePage = lazy(() => import('./Component/Experience/Experience'));
const SkillsPage = lazy(() => import('./Component/Skills/Skills'));
const ContactPage = lazy(() => import('./Component/Contact/Contact'));

function App() {
	const { t: translate, i18n } = useTranslation();
	const [state, setState] = useState({
		theme: localStorage.getItem('theme') === 'light' ? 'dark' : 'light',
		language: localStorage.getItem('lng') === 'de' ? 'de' : 'en',
	});

	function ToggleTheme() {
		setState({
			...state,
			theme: state.theme === 'light' ? 'dark' : 'light',
		});
		localStorage.setItem('theme', state.theme);
	}

	const HandleChangeLng = (lng: string) => {
		setState({ ...state, language: lng === 'en' ? 'en' : 'de' });
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};

	return (
		<ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
			<Router>
				<Navbar
					thm={state.theme}
					toggleTheme={ToggleTheme}
					translate={translate}
					HandleChangeLng={HandleChangeLng}
					lng={state.language}
				/>
				<Suspense fallback={<LoadingPage />}>
					<Routes>
						<Route path='/' element={<HomePage translate={translate} />} />
						<Route
							path='/about'
							element={<AboutPage translate={translate} />}
						/>
						<Route
							path='/projects'
							element={<ProjectsPage translate={translate} />}
						/>
						<Route
							path='/education'
							element={<EducationPage translate={translate} />}
						/>
						<Route
							path='/experience'
							element={<ExperiencePage translate={translate} />}
						/>
						<Route
							path='/skills'
							element={<SkillsPage translate={translate} />}
						/>
						<Route
							path='/contact'
							element={<ContactPage translate={translate} />}
						/>
					</Routes>
				</Suspense>
			</Router>
		</ThemeProvider>
	);
}
export default App;
