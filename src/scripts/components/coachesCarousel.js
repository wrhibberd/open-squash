import Swiper from "swiper";
import "swiper/css";

export default function coachesCarousel() {
	const swiper = new Swiper(this.$refs.carousel, {
		slidesPerView: 1,
		spaceBetween: 20,
		grabCursor: true,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});
	return {
		next() {
			// console.log("next");
			if (swiper.isEnd) {
				swiper.slideTo(0, 1000);
				return;
			}
			swiper.slideNext();
		},

		prev() {
			// console.log("prev");
			if (swiper.isBeginning) {
				swiper.slideTo(swiper.slides.length - 1, 1000);
				return;
			}
			swiper.slidePrev();
		},
	};
}
