import mapboxgl from "mapbox-gl";
import mapboxSdk from "@mapbox/mapbox-sdk/services/geocoding";
mapboxgl.accessToken =
	"pk.eyJ1IjoiaW50ZXJjaXR5c3R1ZGlvIiwiYSI6ImNscWIycTl2ZTIzajkybG05ZWUydXA3aG8ifQ.RWzLIj9piF1OB9kb3Ev--g";
import "mapbox-gl/dist/mapbox-gl.css";

export default function locationsMap() {
	const mapContainer = this.$refs.map;
	const mapboxClient = mapboxSdk({
		accessToken: mapboxgl.accessToken,
	});
	const map = new mapboxgl.Map({
		container: mapContainer,
		style: "mapbox://styles/mapbox/light-v10",
		center: [-73.99275249760754, 40.7421986365454],
		zoom: 11,
	});
	let bounds = {};

	return {
		activeItem: null,
		markerPositions: [],
		init() {
			this.addMarkers();
			map.scrollZoom.disable();
		},

		addMarkers() {
			const markers = this.$el.querySelectorAll(".location");
			const addMarkers = new Promise((resolve) => {
				markers.forEach((marker, index) => {
					const coordinates = marker.dataset.latlng.split(",");
					new mapboxgl.Marker(marker, {
						anchor: "bottom",
					})
						.setLngLat(coordinates)
						.addTo(map);
					this.markerPositions.push(coordinates);
				});
				resolve();
			});
			addMarkers
				.then(() => {
					// Set the map bounds to fit all markers
					bounds = this.markerPositions.reduce(
						function (bounds, coord) {
							return bounds.extend(coord);
						}.bind(this),
						new mapboxgl.LngLatBounds(
							this.markerPositions[0],
							this.markerPositions[0]
						)
					);
				})
				// Wait for map bounds to be set
				.then(() => {
					// add observer to resize map, sidebar and set map bounds on window resize
					new ResizeObserver(() => {
						map.resize();
						this.postionMap();
					}).observe(this.$root);
				});
		},

		toggleActiveItem(id, coordinates) {
			if (this.activeItem === id) {
				this.activeItem = null;
				this.postionMap();
			} else {
				this.activeItem = id;
				map.flyTo({
					center: coordinates,
					zoom: 20,
				});
			}
		},
		clearActiveMarker() {
			// clear active marker
			this.activeMarker = null;
			// set map bounds to fit all markers
			this.postionMap();
		},
		postionMap(boudingCoordinates = bounds) {
			map.fitBounds(boudingCoordinates, {
				maxZoom: 20,
				padding: 96,
				duration: 1000,
			});
		},
	};
}
