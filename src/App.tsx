import React from 'react';
import './tailwind.output.css';
import './components/Header';
import Header from './components/Header';
import { useState } from 'react';
import Filters from './components/Filters';

const App: React.FC = () => {
	const [theme, setTheme] = useState(true);

	const handleThemeChange = (): void => {
		setTheme(!theme);
	};

	return (
		<div
			className={`theme-${theme ? 'light' : 'dark'} bg-elements h-screen`}
		>
			<Header handleThemeChange={handleThemeChange} />
			<Filters></Filters>
		</div>
	);
};

export default App;
