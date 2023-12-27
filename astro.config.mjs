import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: "https://opensquash.org",
	redirects: {
		"/adults": "/",
		"/blog": "/",
		"/faq": "/",
		"/juniors": "/",
		"/locations": "/",
		"/corporate-programs": "/",
		"/squash-101": "/",
		"/financial-aid": "/",
		"/donors": "/",
		"/summer-day-camps": "/",
		"/tournament-camps": "/",
		"/college-coach-camps": "/",
		"/checkout": "/",
		"/paypal-checkout": "/",
		"/order-confirmation": "/",
		"/log-in": "/",
		"/sign-up": "/",
		"/reset-password": "/",
		"/update-password": "/",
		"/access-denied": "/",
		"/user-account": "/",
		"/1-1-lessons": "/",
		"/junior-weekend-match-play": "/",
		"/free-intro-class": "/",
		"/become-a-member": "/",
		"/juniors-program": "/",
		"/fidi-junior-academy": "/",
		"/fidi-membership": "/",
		"/eastern-athletic-club-offer": "/",
		"/juniors-program-old": "/",
		"/junior-preview": "/",
		"/fidi-opening-postcard": "/",
		"/fidi-opening-lesson": "/",
		"/open-squash-classic": "/",
		"/fidi-junior-academy-postcard": "/",
		"/coaching-development-conference": "/",
		"/coaching-conference-signup": "/",
		"/events": "/",
		"/birthday-parties": "/",
		"/corporate-events": "/",
		"/giving-tuesday": "/",
	},
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		partytown({
			config: { debug: true },
		}),
	],
});
