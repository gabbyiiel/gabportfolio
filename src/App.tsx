import { useEffect } from 'react';
import './App.css';
import { Hero2 } from './modules/home/hero/Hero2';
import { gsap } from 'gsap';

function App() {
	useEffect(() => {
		gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

		const cursor = document.querySelector('.cursor');
		const follower = document.querySelector('.cursor.follower');

		const handleMouseMove = (e: MouseEvent) => {
			gsap.to(cursor, 0.2, { x: e.clientX, y: e.clientY });
			gsap.to(follower, 0.7, { x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<>
			<div className="cursor"></div>
			<div className="cursor follower"></div>
			<Hero2 />
		</>
	);
}

export default App;
