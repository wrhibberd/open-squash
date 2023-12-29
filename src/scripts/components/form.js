export default function form() {
	return {
		success: false,
		firstName: "",
		secondName: "",
		submitForm() {
			const form = this.$root.querySelector("form");
			if (this.$validate.isComplete(form)) {
				const formData = new FormData(form);
				// console.log(formData);
				fetch(form.action, {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(formData).toString(),
				})
					// .then(() => console.log("Form successfully submitted"))
					.then(() => this.formSuccess())
					.catch((error) => alert(error));
			}
		},
		formSuccess() {
			this.success = true;
		},
	};
}
