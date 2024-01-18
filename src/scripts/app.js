import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import persist from "@alpinejs/persist";
import validate from "@colinaut/alpinejs-plugin-simple-validate";

/* Project helpers */
import "./utils/downloadLink.js";
import "./utils/favicon.js";
import { vhFix } from "./utils/vhFix";

/* Project components */
import coachesCarousel from "./components/coachesCarousel.js";
import form from "./components/form.js";
import header from "./components/header.js";
import locationsMap from "./components/locationsMap.js";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine plugins */
Alpine.plugin(focus);
Alpine.plugin(persist);
Alpine.plugin(validate);

/* Alpine data */
Alpine.data("coachesCarousel", coachesCarousel);
Alpine.data("form", form);
Alpine.data("header", header);
Alpine.data("locationsMap", locationsMap);

/* Alpine global store */
Alpine.store("global", {
	showTicker: Alpine.$persist(true).using(localStorage),
	sessionParams: Alpine.$persist({}).using(sessionStorage),
	init() {
		// ?utm_source=source&utm_campaign=campaign&utm_medium=medium&utm_term=term&utm_content=content
		setTimeout(() => {
			const urlParams = new URLSearchParams(window.location.search);
			if (urlParams.has("utm_source")) {
				this.sessionParams = {
					...this.sessionParams,
					utm_source: urlParams.get("utm_source"),
				};
			}
			if (urlParams.has("utm_medium")) {
				this.sessionParams = {
					...this.sessionParams,
					utm_medium: urlParams.get("utm_medium"),
				};
			}
			if (urlParams.has("utm_term")) {
				this.sessionParams = {
					...this.sessionParams,
					utm_term: urlParams.get("utm_term"),
				};
			}
			if (urlParams.has("utm_campaign")) {
				this.sessionParams = {
					...this.sessionParams,
					utm_campaign: urlParams.get("utm_campaign"),
				};
			}
			if (urlParams.has("utm_content")) {
				this.sessionParams = {
					...this.sessionParams,
					utm_content: urlParams.get("utm_content"),
				};
			}
		}, 100);
	},
});

/* Start Alpine */
Alpine.start();
init();

/* Define init function */
function init() {
	vhFix();
}
