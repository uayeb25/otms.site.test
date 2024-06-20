/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ffeab6',
				secondary: '#fff9e9',
				dark: '#ffba04',
			}
		},
	},
	plugins: [],
}
