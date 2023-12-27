import AsyncAlpine from "async-alpine";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import validate from "@colinaut/alpinejs-plugin-simple-validate";

/* Project helpers */
import "./utils/downloadLink.js";
import "./utils/favicon.js";
import { vhFix } from "./utils/vhFix";

/* Project components */
import header from "./components/header.js";
import form from "./components/form.js";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine plugins */
Alpine.plugin(focus);
Alpine.plugin(validate);

/* Alpine stores */

/* Alpine data */
Alpine.data("header", header);
Alpine.data("form", form);
// Alpine.data("tailImage", tailImage);

/* Start Alpine */
AsyncAlpine.init(Alpine)
	.data("locationsMap", () => import("./components/locationsMap.js"))
	.data("coachesCarousel", () => import("./components/coachesCarousel.js"))
	.start();
Alpine.start();
init();

/* Define init function */
function init() {
	vhFix();
}
