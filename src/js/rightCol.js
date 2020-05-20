import {dataRight} from "../data/dataRight";

webix.type(webix.ui.list, {
	name: "specsType",
	height: 64,
	margin: 5,
	css: "listItem",
	template(obj) {
		const html = `
		<div class='listTitle'>${obj.param}</div>
		<div class='listDescr'>${obj.value}</div>    
		`;
		return html;
	}
});

export const rightCol = {
	width: 379,
	type: "clean",
	rows: [
		{
			view: "toolbar",
			css: "rightToolbar",
			paddingX: 10,
			height: 44,
			cols: [
				{
					view: "label",
					label: "[CARD] Graphics Card"
				},
				{
					view: "icon",
					icon: "mdi mdi-pencil"
				}
			]
		},
		{
			type: "clean",
			rows: [
				{
					view: "template",
					css: "rightTags",
					autoheight: true,
					template: '<div class="tag"><span>Vendor</span><span class="tag_delete">x</span></div>'
				},
				{
					view: "scrollview",
					css: "rightAccordion",
					width: 284,
					body: {
						type: "clean",
						padding: 10,
						margin: 10,
						rows: [
							{
								header: "Engine specs",
								body: {
									view: "list",
									autoheight: true,
									type: "specsType",
									data: dataRight
								}
							},
							{
								header: "Memory spec",
								body: {
									view: "list",
									autoheight: true,
									type: "specsType",
									data: dataRight
								}
							},
							{
								header: "Additional information",
								collapsed: true,
								body: {
									view: "list",
									autoheight: true,
									type: "specsType",
									data: dataRight
								}
							},
							{
								header: "Technology support",
								collapsed: true,
								body: {
									view: "list",
									autoheight: true,
									type: "specsType",
									data: dataRight
								}
							}
						]
					}
				}
			]
		}
	]
};
