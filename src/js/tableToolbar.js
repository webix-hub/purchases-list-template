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
						{id: 1, value: ""},
						{id: 2, value: "Datacard"},
						{id: 3, value: "Processor"},
						{id: 4, value: "HDD"},
						{id: 5, value: "Keyboard"}
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
						{id: 1, value: ""},
						{id: 2, value: "Vendor"},
						{id: 3, value: "Product"},
						{id: 4, value: "Price"}
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
