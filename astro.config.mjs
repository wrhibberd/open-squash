import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: "https://opensquash.org",
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		partytown(),
	],
});
