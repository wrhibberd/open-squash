import Swiper from "swiper";
import "swiper/css";

export default function coachesCarousel() {
	const swiper = new Swiper(this.$refs.carousel, {
		slidesPerView: "auto",
		spaceBetween: 20,
		grabCursor: true,
		slidesOffsetBefore: 20,
		slidesOffsetAfter: 20,
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
