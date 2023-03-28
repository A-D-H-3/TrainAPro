(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */
	data.moduleList = [];

	if (input && input.action === "loadClass") {
		moduleList(input.sys_id);
	}

	function moduleList(classID) {
		var moduleInstGR = new GlideRecordSecure("x_adsr_tap_m2m_module_instance");
		moduleInstGR.addQuery("x_adsr_tap_class", classID);
		moduleInstGR.query();
		while (moduleInstGR.next()) {
			var moduleObj = {
				mod_sys_id_inst: moduleInstGR.getDisplayValue("sys_id"),
				name: moduleInstGR.getDisplayValue("x_adsr_tap_module"),
				mod_sys_id: moduleInstGR.x_adsr_tap_module.toString(),
			};
			data.moduleList.push(moduleObj);
		}
	}
})();
