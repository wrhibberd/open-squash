const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
if (!isMacLike) {
	setTimeout(() => {
		const links = document.querySelectorAll("[data-download='app']");
		links.forEach((link) => {
			link.href =
				"https://play.google.com/store/apps/details?id=com.playbypoint.opensquash";
		});
	}, 300);
}
