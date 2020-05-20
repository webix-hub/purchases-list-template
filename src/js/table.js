import {dataTable} from "../data/dataTable";
import {tableToolbar} from "./tableToolbar";

export const table = {
	borderless: true,
	rows: [
		tableToolbar,
		{
			id: "treetable",
			view: "treetable",
			css: "table",
			select: true,
			checkboxRefresh: true,
			type: {
				customCheckbox(obj) {
					if (obj.$level === 1) return "";
					return `<span class="webix_table_checkbox webix_icon customIcon mdi mdi-24px mdi-checkbox-${obj.ch1 ? "marked" : "blank-outline"}"></span>`;
				},
				customCategory(obj, common) {
					if (obj.$level === 1) return `${common.icon(obj, common) + obj.category} (${obj.$count})`;
					return "";
				}
			},
			columns: [
				{id: "category", header: "", width: 210, template: "{common.customCategory()}"},
				{id: "ch1", header: {content: "headerCheckbox"}, width: 40, template: "{common.customCheckbox()}"},
				{id: "vendor", header: "Vendor", width: 150},
				{id: "product", header: "Product", minWidth: 280, fillspace: true},
				{id: "quantity", header: "Minimal Quantity", width: 150, template: "#quantity#.00"},
				{id: "price", header: "Price($)", width: 150},
				{id: "start", header: "Start Date", width: 130},
				{id: "end", header: "End Date", width: 130}
			],
			data: dataTable
		}

	]
};
