(function () {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.history = [];
	const userID = gs.getUserID();

	historyLoad();

	function historyLoad() {
		var recentStoriesGR = new GlideRecordSecure("x_adsr_tap_m2m_story_instance");
		recentStoriesGR.addQuery("x_adsr_tap_m2m_trainee.sys_user", userID);
		recentStoriesGR.setLimit(5);
		recentStoriesGR.query();
		if(!recentStoriesGR.hasNext()){
			console.log("No Stories")
			data.history = [{name: "No Stories Reviewed"}]
			return;
		}
		while (recentStoriesGR.next()) {
			var historyOBJ = {
				name: recentStoriesGR.x_adsr_tap_story.name.getDisplayValue(),
				description:recentStoriesGR.x_adsr_tap_story.description.getDisplayValue(),
				sys_id: recentStoriesGR.getDisplayValue("sys_id"),
			};
			data.history.push(historyOBJ);	
		}
	}
	console.log(data.history.toString())
})();
