export const tableToolbar = {
	view: "toolbar",
	css: "tableToolbar",
	paddingX: 10,
	height: 44,
	cols: [
		{
			view: "label",
			label: "Vendor Pricelists"
		},
		{},
		{
			view: "richselect",
			css: "tableToolbarSelect",
			label: "<span class='mdi mdi-24px mdi-filter'></span>",
			labelWidth: 24,
			width: 120,
			icon: "mdi mdi-menu-down",
			placeholder: "Filters",
			options: {
				view: "suggest",
				fitMaster: false,
				width: 120,
				body: {
					view: "list",
					data: [
						{id: 1, value: "Datacard"},
						{id: 2, value: "Processor"},
						{id: 3, value: "HDD"},
						{id: 4, value: "Keyboard"}
					]
				}
			}
		},
		{
			view: "spacer",
			width: 30
		},
		{
			view: "richselect",
			css: "tableToolbarSelect",
			label: "<span class='mdi mdi-24px mdi-group'></span>",
			labelWidth: 24,
			width: 112,
			icon: "mdi mdi-menu-down",
			placeholder: "Group by",
			options: {
				view: "suggest",
				fitMaster: false,
				width: 120,
				body: {
					view: "list",
					data: [
						{id: 1, value: "Vendor"},
						{id: 2, value: "Product"},
						{id: 3, value: "Price"}
					]
				}
			}
		},
		{},
		{
			view: "button",
			css: "webix_secondary",
			value: "Import",
			width: 80
		},
		{
			view: "button",
			css: "webix_primary",
			value: "Create",
			width: 80
		}
	]
};
