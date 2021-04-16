webix.ui.datafilter.headerCheckbox = webix.extend({
	refresh(master, node, config) {
		node.onclick = () => {
			config.checked = !config.checked;
			node.innerHTML = this.render(master, config);

			let column = master.getColumnConfig(config.columnId);
			let checked = config.checked ? column.checkValue : column.uncheckValue;

			master.data.each((obj) => {
				obj[config.columnId] = checked;
				master.callEvent("onCheck", [obj.id, config.columnId, checked]);
				master.data.callEvent("onStoreUpdated", [obj.id, obj, "save"]);
			});
			master.refresh();
		};
	},
	render(master, config) {
		return `<span class="webix_icon customIcon mdi mdi-24px mdi-checkbox-${config.checked ? "marked" : "blank-outline"}"></span>`;
	}
}, webix.ui.datafilter.masterCheckbox);
