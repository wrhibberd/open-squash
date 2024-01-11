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
});

/* Start Alpine */
Alpine.start();
init();

/* Define init function */
function init() {
	vhFix();
}
