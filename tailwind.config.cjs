/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		{transform: (content) => content.replace(/taos:/g, '')},
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('taos/plugin')
	],
	safelist: [
		'!duration-0',
		'!delay-0',
		'html.js :where([class*="taos:"]:not(.taos-init))'
	],
}
