const faviconElement = document.querySelector('link[rel="icon"]');
document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "visible") {
		faviconElement.href = "/favicon-active.svg";
	} else {
		faviconElement.href = "/favicon-inactive.svg";
	}
});
