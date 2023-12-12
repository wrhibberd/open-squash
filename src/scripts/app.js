import Alpine from "alpinejs";
// import focus from "@alpinejs/focus";
// import sort from "alpinejs-sort";

/* Project helpers */
import { vhFix } from "./utils/vhFix";

/* Project components */
// import entries from "./components/entries.js";
// import tailImage from "./components/tailImage.js";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine plugins */
// Alpine.plugin(focus);
// Alpine.plugin(sort);

/* Alpine stores */

/* Alpine data */
// Alpine.data("entries", entries);
// Alpine.data("tailImage", tailImage);

/* Start Alpine */
Alpine.start();
init();

/* Define init function */
function init() {
	vhFix();
}
