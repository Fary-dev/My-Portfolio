/** @format */

import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Component/Themes';
import LoadingPage from './Component/LoadingPage';

const HomePage = lazy(() => import('./Component/About/About'));
const AboutPage = lazy(() => import('./Component/About/About'));
const ProjectsPage = lazy(() => import('./Component/Projects/Projects'));
const EducationPage = lazy(() => import('./Component/Education/Education'));
const ExperiencePage = lazy(() => import('./Component/Experience/Experience'));
const SkillsPage = lazy(() => import('./Component/Skills/Skills'));
const ContactPage = lazy(() => import('./Component/Contact/Contact'));

function App() {
	const { t, i18n } = useTranslation();

	const [theme, setTheme] = useState(
		localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
	);

	const ToggleTheme = () => {
		setTheme((current) => (current === 'light' ? 'dark' : 'light'));
		localStorage.setItem('theme', theme);
	};
	const [language, setLanguage] = useState(
		localStorage.getItem('lng') === 'de' ? 'de' : 'en'
	);

	const HandleChangeLng = (lng: string) => {
		if (lng === 'en') {
			setLanguage('en');
		} else {
			setLanguage('de');
		}
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};

	useEffect(() => {
		ToggleTheme();
	}, []);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<Router>
				<Navbar
					thm={theme}
					toggleTheme={ToggleTheme}
					t={t}
					HandleChangeLng={HandleChangeLng}
					lng={language}
				/>
				<Suspense fallback={<LoadingPage />}>
					<Routes>
						<Route path='/' element={<HomePage t={t} />} />
						<Route path='/about' element={<AboutPage t={t} />} />
						<Route path='/projects' element={<ProjectsPage t={t} />} />
						<Route path='/education' element={<EducationPage t={t} />} />
						<Route path='/experience' element={<ExperiencePage t={t} />} />
						<Route path='/skills' element={<SkillsPage t={t} />} />
						<Route path='/contact' element={<ContactPage t={t} />} />
					</Routes>
				</Suspense>
			</Router>
		</ThemeProvider>
	);
}
export default App;
