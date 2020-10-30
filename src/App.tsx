import React from 'react';
import './tailwind.output.css';
import './components/Header';
import Header from './components/Header';
import { useState } from 'react';
import Filters from './components/Filters';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const App: React.FC = () => {
	const [theme, setTheme] = useState(true);

	const handleThemeChange = (): void => {
		setTheme(!theme);
	};

	const queryCache = new QueryCache();

	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<div
				className={`theme-${
					theme ? 'light' : 'dark'
				} bg-elements h-screen`}
			>
				<Header handleThemeChange={handleThemeChange} />
				<Filters></Filters>
			</div>
		</ReactQueryCacheProvider>
	);
};

export default App;
