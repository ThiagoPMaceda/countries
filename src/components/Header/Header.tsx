import React from 'react';
import { BiMoon } from 'react-icons/bi';

const Header: React.FC = () => {
    return (
        <div>
            <header className="h-16 shadow-2xl flex items-center justify-around font-bold">
                <h2>
                    Where in the world?
                </h2>
                <div className="flex flex-row items-center font-light">
                <button><BiMoon size={20}/></button>
                <p className="pl-2">Dark Mode</p>
                </div>
            </header>

        </div>
    );
}

export default Header;