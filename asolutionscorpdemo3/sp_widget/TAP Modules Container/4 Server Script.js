(function() {
 
	if(!input) {
		 onLoad();
	}

	
	function onLoad() {
		var selected = false;
		var id = $sp.getParameter("sys_id");
		data.stories = [];
		
		var moduleGR = new GlideRecordSecure("x_adsr_tap_module");
		moduleGR.get(id);
		data.module = {
			"name": moduleGR.name.getDisplayValue(),
			"description": moduleGR.description.getDisplayValue(),
		}
		
		var storyGR = new GlideRecordSecure("x_adsr_tap_story");
		storyGR.addQuery("module", id);
		storyGR.query();
		while(storyGR.next()) {
			var obj = {
			"name": storyGR.name.getDisplayValue(),
			"description": storyGR.description.getDisplayValue(),
			"time": storyGR.expected_time.getDisplayValue(),
			"explanation": storyGR.explanation.getDisplayValue(),
			"acceptance_criteria": storyGR.acceptance_criteria.getDisplayValue(),
			"selected":false
		}
			if(!selected) {
				obj.selected = true;
			}
			selected = true;
			data.stories.push(obj);
		
			}
		console.log(data.stories)
	}

})();