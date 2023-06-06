import { useState, useEffect } from 'react'
import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(null);

   useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         setTheme('dark');
      } else {
         setTheme('light');
      } 
   }, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

// For icon styling:
// https://heroicons.com

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
      <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 24 24" 
         fill="currentColor" 
         className="w-6 h-6">
         <path 
            fillRule="evenodd" 
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" 
            clipRule="evenodd" />
      </svg>


	);

  return (
	<>
		<button
			type="button"
			onClick={handleThemeSwitch}
			className="fixed p-2 z-10 right-20 top-4 text-lg p-1 rounded-md"
         style={{
            backgroundColor: theme === 'dark' ? '#DB7B00' : '#8E3CBC',
            color: theme === 'dark' ? '#000000' : '#FFFFFF',
            padding: '1px',
            borderRadius: 'md'
         }}
		>
			{theme === 'dark' ? sun : moon}
		</button>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
				<Intro />
				<Portfolio />
				<Timeline />
				<Contact />
				<Footer />
			</div>
		</div>
	 </>
  )
}

export default App
