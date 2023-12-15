export default function header() {
	return {
		menuOpen: false,
		closeMenu() {
			this.menuOpen = false;
		},
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},
	};
}
