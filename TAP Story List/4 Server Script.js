(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.storyList = [];

	if (input && input.action === "loadClass") {
		storyList(input.sys_id);
	}

	function storyList(classID) {
		var storyGR = new GlideRecordSecure("x_adsr_tap_story");
		storyGR.addQuery("module", classID);
		// storyGR.addQuery("x_adsr_tap_story.module", input.moduleID);
		storyGR.query();
		while (storyGR.next()) {
			var storyObj = {
				name: storyGR.name.getDisplayValue(),
				acceptanceCri:
				storyGR.acceptance_criteria.getDisplayValue(),
			};
			data.storyList.push(storyObj);
		}
	}
})();
