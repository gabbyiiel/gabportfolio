/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['index.html', './src/**/*.tsx'],
	theme: {
		colors: {
			'light-text': 'rgb(var(--light-text) / <alpha-value>)',
			'light-primary': 'rgb(var(--light-primary) / <alpha-value>)',
			'light-secondary': 'rgb(var(--light-secondary) / <alpha-value>)',
			'light-accent': 'rgb(var(--light-accent) / <alpha-value>)',
			'light-background': '#FBFBFB',
			'dark-text': 'rgb(var(--dark-text) / <alpha-value>)',
			'dark-primary': 'rgb(var(--dark-primary) / <alpha-value>)',
			'dark-secondary': 'rgb(var(--dark-secondary) / <alpha-value>)',
			'dark-accent': 'rgb(var(--dark-accent) / <alpha-value>)',
			'dark-background': 'rgb(var(--dark-background) / <alpha-value>)'
		},
		fontFamily: {
			GT: ['GT Eesti Pro Display', 'sans-serif'],
			Groningen: ['Groningen', 'sans-serif']
		},
		fontSize: {
			h5: 'clamp(21px, 1.5vw, 27px)',
			links: 'clamp(16px, 1vw, 20px)'
		},
		lineHeight: {
			negative: '0.8'
		},
		extend: {}
	},
	plugins: []
};
