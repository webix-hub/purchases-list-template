export const header = {
	view: "toolbar",
	id: "header",
	css: "webix_dark",
	paddingX: 10,
	paddingY: 6,
	cols: [
		{
			view: "label",
			label: "Purchases",
			css: "headerLabel",
			width: 239
		},
		{
			view: "multicombo",
			value: "1",
			css: "headerMulticombo",
			width: 284,
			height: 32,
			options: [
				{id: 1, value: "Vendor"}
			]
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-information"
		},
		{
			view: "icon",
			icon: "mdi mdi-android-messages",
			badge: 5
		},
		{
			view: "icon",
			icon: "mdi mdi-settings"
		},
		{
			view: "template",
			borderless: true,
			css: "pointer",
			width: 44,
			height: 44,
			template() {
				const html = `
					<img class="headerAvatar" src="photos/avatar.png">
					<span class="status green"></span>`;
				return html;
			}
		}
	]
};
