(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	var storyID = input.sys_id;
	var userID = gs.getUserID();
	storyAnswer(storyID);

	function storyAnswer(id) {
		var storyGR = new GlideRecordSecure("x_adsr_tap_m2m_story_instance");	
		storyGR.addQuery("x_adsr_tap_story", id);
		storyGR.addQuery("x_adsr_tap_m2m_trainee.sys_user", userID);
		storyGR.query();
		data.storyAnswer = {};
		while (storyGR.next()) {
			data.state = storyGR.state.toString();
			var storyObj = {
				name: storyGR.getElement("x_adsr_tap_story.name").getDisplayValue(),
				criteria: storyGR.getElement("x_adsr_tap_story.acceptance_criteria").getDisplayValue(),
				str_sys_id: storyGR.getDisplayValue("sys_id"),
				kt: storyGR.getDisplayValue("knowledge_transfer"),
			};
			data.storyAnswer = storyObj;
		}
		if(input) {
			data.state = input.state;
		}
	}

	if(input && input.action == "submitAnswer"){
		var storyGR = new GlideRecordSecure("x_adsr_tap_m2m_story_instance");	
		storyGR.addQuery("sys_id", input.storyAnswer.str_sys_id);
		storyGR.query();
		while (storyGR.next()) {
		storyGR.state = input.state;
		storyGR.knowledge_transfer = input.storyAnswer.kt;
		storyGR.update();
		}
		storyAnswer(input.storyAnswer.str_sys_id);
	}
	
	

})();