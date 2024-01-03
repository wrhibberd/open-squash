export default function form() {
	return {
		success: false,
		firstName: "",
		secondName: "",
		submitForm() {
			const form = this.$root.querySelector("form");
			if (this.$validate.isComplete(form)) {
				const formData = new FormData(form);
				const netlifyData = new URLSearchParams(formData);
				const netlifyBody = netlifyData.toString();
				const salesfoceData = Object.fromEntries(formData);
				const salesforceBody = JSON.stringify(salesfoceData);

				const postToNetlify = fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: netlifyBody,
				});

				const postToSalesforce = fetch(
					"https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D0b000000CDCM",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: salesforceBody,
					}
				);

				postToNetlify
					.then(postToSalesforce)
					.then(() => this.formSuccess())
					.catch((error) => alert(error));
			}
		},

		formSuccess() {
			this.success = true;
		},
	};
}
