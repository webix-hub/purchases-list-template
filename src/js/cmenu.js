export const cmenu = {
	view: "contextmenu",
	id: "cmenu",
	css: "cmenu",
	width: 170,
	template(obj) {
		let keyText = `<span class='cmenuKey'>${obj.text}</span>`;
		return `<div class='cmenuItem'>
                    <span class='webix_list_icon webix_icon ${obj.icon}'></span>
                    <span>${obj.value}</span>
                    ${obj.text ? keyText : ""}
                </div>`;
	},
	data: [
		{id: "add", value: "Add", icon: "mdi mdi-plus"},
		{id: "rename", value: "Rename", icon: "mdi mdi-pencil"},
		{id: "delete1", value: "Delete", icon: "mdi mdi-close", text: "Del"},
		{$template: "Separator"},
		{id: "info", value: "Info", icon: "mdi mdi-information-outline"}
	],
	on: {
		onItemClick(id) {
			let context = this.getContext();
			let treetable = context.obj;
			let treetableId = context.id;

			webix.message(`Row id: <i>${treetable.getItem(treetableId).id}</i> <br/>Action: <i>${this.getItem(id).value}</i>`);
		}
	}
};
