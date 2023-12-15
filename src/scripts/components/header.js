export default function header() {
	return {
		pageTop: false,
		menuOpen: false,

		init() {
			console.log("hiii");

			this.$nextTick(() => {
				this.checkPageTop();
			});
			// scroll listener to check if page is at top
			window.addEventListener("scroll", () => {
				this.checkPageTop();
			});
		},

		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},

		checkPageTop() {
			this.pageTop = window.scrollY === 0;
		},
	};
}
