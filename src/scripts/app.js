import AsyncAlpine from "async-alpine";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";

/* Project helpers */
import "./utils/favicon.js";
import { vhFix } from "./utils/vhFix";

/* Project components */
import header from "./components/header.js";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine plugins */
Alpine.plugin(focus);

/* Alpine stores */

/* Alpine data */
Alpine.data("header", header);
// Alpine.data("tailImage", tailImage);

/* Start Alpine */
AsyncAlpine.init(Alpine)
	.data("locationsMap", () => import("./components/locationsMap.js"))
	.start();
Alpine.start();
init();

/* Define init function */
function init() {
	vhFix();
}
