import React from 'react';
import './tailwind.output.css';
import './components/Header';
import Header from './components/Header';
import { useState } from 'react';
import SearchCountry from './components/SearchCountry';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { FilterByRegion } from './components/FilterByRegion';

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
				<SearchCountry></SearchCountry>
				<FilterByRegion></FilterByRegion>
			</div>
		</ReactQueryCacheProvider>
	);
};

export default App;
