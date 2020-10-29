import React from 'react';
import { BiMoon } from 'react-icons/bi';

interface themeChangeProps {
	handleThemeChange: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: React.FC<themeChangeProps> = ({ handleThemeChange }) => {
	return (
		<div>
			<header className='h-16 shadow-2xl flex items-center justify-around font-bold'>
				<h2 className='text-textPrimary'>Where in the world?</h2>
				<div className='flex flex-row items-center font-light'>
					<button onClick={handleThemeChange}>
						<BiMoon size={20} className='text-textPrimary' />
					</button>
					<p className='pl-2 text-textPrimary'>Dark Mode</p>
				</div>
			</header>
		</div>
	);
};

export default Header;
