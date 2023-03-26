(function () {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */
  data.tile = {};

  /*---------------------------------------------
		BC - The input checks to see if we are getting anything
		from the client(html/angularjs) if we are
		it checks the data object for input of action
		then if that action string matches it will run.
		This will only be triggered if there is input
		from the client. This input will be triggered
		at load time because it finds something in the
		root scope. the root scope is already broadcasting
		from the other widget of "tap_class_list" and will
		give the sys ID of the current class.
		This will give you enough info to find associated
		modules and do different data manipulation
		all things are connected to the class its just
		figuring out how to query the proper tables.
	---------------------------------------------*/

  // AH - I need to understand this better
  if (input && input.action === "loadClass") {
    loadData();
  }

  function loadData() {
		var scriptInclude = new x_adsr_tap.userRoleUtility()
    var broadcastedID = input.sys_id;
    var tileInfoGR = new GlideRecordSecure("x_adsr_tap_class");
    tileInfoGR.addQuery("sys_id", broadcastedID);
    tileInfoGR.query();
    if (tileInfoGR.hasNext()) {
      data.tile = {
        storyCompletion: scriptInclude.getStoryCompletion(),
        assessmentCompletion: scriptInclude.overallAssessmentScore(),
        moduleCompletion: scriptInclude.getModuleCompletion(),
        classCompletion: scriptInclude.overallClassCompletion(),
      };
    }
  }
})();
