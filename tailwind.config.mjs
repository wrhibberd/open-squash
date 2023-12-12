/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colours: {
			transparent: "transparent",
			current: "currentColor",
			black: "#2F2626",
			white: "#FCE6D2",
			green: {
				DEFAULT: "#8FDAAF",
				forest: "#16403E",
			},
			blue: {
				DEFAULT: "#002D78",
				light: "#00AAFF",
			},
			red: "#ED1856",
			yellow: "#FCDA01",
		},
		fontFamily: {
			heading: ["Kanit", ...defaultTheme.fontFamily.sans],
			sans: ["DM sans", ...defaultTheme.fontFamily.sans],
			mono: ["DM mono", ...defaultTheme.fontFamily.mono],
		},
		spacing: {
			0: "0rem",
			2: "0.125rem",
			10: "0.625rem",
			20: "1.25rem",
			40: "2.5rem",
			60: "3.75rem",
			80: "5rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
			"r-screen": "calc(var(--vh, 1vh) * 100)",
		},
		transitionDuration: {
			0: "0ms",
			DEFAULT: "300ms",
			300: "300ms",
			600: "600ms",
			1200: "1200ms",
		},
		extend: {
			transitionTimingFunction: {
				DEFAULT:
					"linear( 0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%, 0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%, 1.001 )",
			},
			listStyleType: {
				circle: "circle",
				square: "square",
				alpha: "lower-alpha",
				"upper-alpha": "upper-alpha",
				roman: "lower-roman",
				"upper-roman": "upper-roman",
			},
			minHeight: {
				screen: "100vh",
				"r-screen": "calc(var(--vh, 1vh) * 100)",
			},
			maxHeight: {
				screen: "100vh",
				"r-screen": "calc(var(--vh, 1vh) * 100)",
			},
		},
	},
	plugins: [require("autoprefixer")],
};
