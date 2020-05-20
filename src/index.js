import "./js/tableCheckbox";
import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {table} from "./js/table";
import {rightCol} from "./js/rightCol";
import {cmenu} from "./js/cmenu";


// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				cols: [
					sidebar,
					{
						type: "space",
						cols: [
							table,
							rightCol
						]
					}
				]
			}
		]
	});

	webix.ui(cmenu);

	webix.$$("sidebar").select("purchase");
	webix.$$("cmenu").attachTo(webix.$$("treetable"));
});
