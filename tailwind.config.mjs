/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
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
			red: {
				DEFAULT: "#ED1856",
				dark: "#5D0023",
			},
			yellow: "#FCDA01",
		},
		fontFamily: {
			heading: ["Kanit", ...defaultTheme.fontFamily.sans],
			sans: ["DM sans", ...defaultTheme.fontFamily.sans],
			mono: ["DM mono", ...defaultTheme.fontFamily.mono],
		},
		fontSize: {
			"heading-xl": ["8.3125rem", { lineHeight: "0.75" }], // 133px
			"heading-lg": ["6.25rem", { lineHeight: "0.75" }], // 100px
			"heading-md": ["4.6875rem", { lineHeight: "0.75" }], // 75px
			heading: ["3.5rem", { lineHeight: "0.75" }], // 56px
			"heading-sm": ["2.625rem", { lineHeight: "0.75" }], // 42px
			"heading-xs": ["2rem", { lineHeight: "0.75" }], // 32px
			"heading-2xs": ["1.5rem", { lineHeight: "0.75" }], // 24px
			"heading-3xs": ["1.125rem", { lineHeight: "0.75" }], // 18px
			"body-lg": ["2rem", { lineHeight: "1.25" }], // 32px
			"body-md": ["1.5rem", { lineHeight: "1.25" }], // 24px
			body: ["1.125rem", { lineHeight: "1.25" }], // 18px
			"body-sm": ["0.875rem", { lineHeight: "1.25" }], // 14px
			label: ["0.75rem", { lineHeight: "1.25" }], // 12px
		},
		spacing: {
			0: "0rem",
			2: "0.125rem",
			5: "0.3125rem",
			9: "0.5625rem",
			10: "0.625rem",
			14: "0.875rem",
			15: "0.9375rem",
			20: "1.25rem",
			25: "1.5625rem",
			30: "1.875rem",
			35: "2.1875rem",
			40: "2.5rem",
			60: "3.75rem",
			80: "5rem",
			100: "6.25rem",
			124: "7.75rem",
			160: "10rem",
			350: "21.875rem",
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
			borderWidth: {
				DEFAULT: "2px",
			},
			borderRadius: {
				none: "0",
				DEFAULT: "0.25rem",
				md: "0.5rem",
				full: "9999px",
			},
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
	plugins: [require("autoprefixer"), require("@tailwindcss/forms")],
};
