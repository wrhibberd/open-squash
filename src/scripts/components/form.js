export default function form() {
	return {
		success: false,
		firstName: "",
		secondName: "",
		submitForm() {
			const form = this.$root.querySelector("form");
			if (this.$validate.isComplete(form)) {
				const formData = new FormData(form);
				const data = new URLSearchParams(formData);

				// const postToNetlify = fetch("/", {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/x-www-form-urlencoded",
				// 	},
				// 	body: data.toString(),
				// });

				// const postToSalesforce = fetch(
				// 	"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D0b000000CDCM",
				// 	{
				// 		method: "POST",
				// 		headers: {
				// 			"Content-Type": "application/x-www-form-urlencoded",
				// 		},
				// 		body: data.toString(),
				// 	}
				// );

				fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: data.toString(),
				})
					.then(() => this.formSuccess())
					.catch((error) => alert(error));
			}
		},

		formSuccess() {
			this.success = true;
		},
	};
}
