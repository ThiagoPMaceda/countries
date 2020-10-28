import React from 'react';
import './tailwind.output.css';
import './components/Header'
import Header from './components/Header';
import { useState } from 'react';

const App: React.FC =() => {

  const [theme, setTheme] = useState(true);

   const handleThemeChange = (): void => {
    setTheme(!theme);
   }

  return (
    <div className={`theme-${theme ? "light" : "dark"} bg-background`} >
      <Header handleThemeChange={handleThemeChange}>
      </Header>
    </div>
  );
}

export default App;
