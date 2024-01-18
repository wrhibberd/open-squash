import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function form(isContact = false) {
	return {
		isContact: isContact,
		success: false,
		firstName: "",
		secondName: "",
		subject: "",
		showTourFields: false,
		showWeekend: false,
		showWeekday: false,
		init() {
			this.checkForURLParams();
			this.$nextTick(() => {
				this.matchURLParams();
			}, 300);
			this.contactFormConditionals();
		},
		contactFormConditionals() {
			if (this.isContact) {
				let picker = flatpickr(this.$refs.picker, {
					dateFormat: "m/d/Y",
					onChange: (date) => {
						const newDate = new Date(date);
						const day = newDate.getDay();
						if (day === 0 || day === 6) {
							this.showWeekend = true;
							this.showWeekday = false;
						} else {
							this.showWeekend = false;
							this.showWeekday = true;
						}
					},
				});

				this.$watch("subject", (value) => {
					if (value === "Schedule a Tour") {
						this.showTourFields = true;
					} else {
						this.showTourFields = false;
					}
				});
			}
		},
		matchURLParams() {
			const form = this.$root.querySelector("form");
			const urlParams = new URLSearchParams(window.location.search);
			const inputs = form.querySelectorAll("input");
			const selects = form.querySelectorAll("select");
			const textareas = form.querySelectorAll("textarea");
			inputs.forEach((input) => {
				const inputName = input.getAttribute("name");
				if (urlParams.has(inputName)) {
					input.value = urlParams.get(inputName);
				}
			});
			selects.forEach((select) => {
				const selectName = select.getAttribute("name");
				if (urlParams.has(selectName)) {
					const options = select.querySelectorAll("option");
					options.forEach((option) => {
						if (option.value === urlParams.get(selectName)) {
							option.setAttribute("selected", "selected");
						}
					});
				}
			});
			textareas.forEach((textarea) => {
				const textareaName = textarea.getAttribute("name");
				if (urlParams.has(textareaName)) {
					textarea.value = urlParams.get(textareaName);
				}
			});
		},
		checkForURLParams() {
			const form = this.$root.querySelector("form");
			const urlParams = new URLSearchParams(window.location.search);

			const source =
				urlParams.get("utm_source") ||
				this.$store.global.sessionParams.utm_source;
			const medium =
				urlParams.get("utm_medium") ||
				this.$store.global.sessionParams.utm_medium;
			const term =
				urlParams.get("utm_term") ||
				this.$store.global.sessionParams.utm_term;
			const campaign =
				urlParams.get("utm_campaign") ||
				this.$store.global.sessionParams.utm_campaign;
			const content =
				urlParams.get("utm_content") ||
				this.$store.global.sessionParams.utm_content;
			if (source) {
				// add hidden input to form
				const sourceInput = document.createElement("input");
				// set input attributes
				sourceInput.setAttribute("type", "hidden");
				sourceInput.setAttribute("name", "00N5a00000CsKs9");
				sourceInput.setAttribute("value", source);
				// add input to start of form
				form.insertBefore(sourceInput, form.firstChild);
			}
			if (medium) {
				// add hidden input to form
				const mediumInput = document.createElement("input");
				// set input attributes
				mediumInput.setAttribute("type", "hidden");
				mediumInput.setAttribute("name", "00N5a00000CsKsE");
				mediumInput.setAttribute("value", medium);
				// add input to start of form
				form.insertBefore(mediumInput, form.firstChild);
			}
			if (term) {
				// add hidden input to form
				const termInput = document.createElement("input");
				// set input attributes
				termInput.setAttribute("type", "hidden");
				termInput.setAttribute("name", "00N5a00000CsKsJ");
				termInput.setAttribute("value", term);
				// add input to start of form
				form.insertBefore(termInput, form.firstChild);
			}
			if (campaign) {
				// add hidden input to form
				const campaignInput = document.createElement("input");
				// set input attributes
				campaignInput.setAttribute("type", "hidden");
				campaignInput.setAttribute("name", "00N5a00000CsKsO");
				campaignInput.setAttribute("value", campaign);
				// add input to start of form
				form.insertBefore(campaignInput, form.firstChild);
			}
			if (content) {
				// add hidden input to form
				const contentInput = document.createElement("input");
				// set input attributes
				contentInput.setAttribute("type", "hidden");
				contentInput.setAttribute("name", "00N5a00000CsKsT");
				contentInput.setAttribute("value", content);
				// add input to start of form
				form.insertBefore(contentInput, form.firstChild);
			}
		},
		submitForm() {
			const form = this.$root.querySelector("form");
			if (this.$validate.isComplete(form)) {
				const formData = new FormData(form);
				const data = new URLSearchParams(formData);
				const body = data.toString();

				fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: body,
				})
					.then(
						fetch(
							"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D0b000000CDCM",
							{
								method: "POST",
								headers: {
									"Content-Type":
										"application/x-www-form-urlencoded",
								},
								body: body,
							}
						)
					)
					.then(() => this.formSuccess())
					.catch((error) => alert(error));
			}
		},

		formSuccess() {
			gtag("event", "Form-submitted");
			this.success = true;
		},
	};
}
