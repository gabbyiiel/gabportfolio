/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['index.html', './src/**/*.tsx'],
	theme: {
		colors: {
			text: '#131113',
			background: '#F8F7F8',
			primary: '#645960',
			secondary: '#DAD7D7',
			accent: '#796D6F',
			'dark-text': '#F8F7F8',
			'dark-background': '#131113',
			'dark-primary': '#645960',
			'dark-secondary': '#0D0C0C',
			'dark-accent': '#C3BCBD'
		},
		fontFamily: {
			GT: ['GT Eesti Pro Display', 'sans-serif'],
			Groningen: ['Groningen', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
